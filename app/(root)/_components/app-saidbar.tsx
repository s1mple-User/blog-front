"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  useSidebar,
} from "@/components/ui/sidebar"
import { LogOut, Plus, BookOpenText } from "lucide-react"

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { useActions } from "@/hooks/useActions"
import { useTypedSelector } from "@/hooks/useTypedSelector"
import DialogDemo from "@/components/cards/card-model"
import Link from "next/link"
import { getRefresh } from "@/config/cookis.config"

export function AppSidebar() {
  const [openModel, setModelOpen] = useState(false)
  const { logout } = useActions()
  const { isLoading, user } = useTypedSelector(state => state.user)
  const { open, setOpen } = useSidebar()

  const logoutUser = async () => {
    const refresh = getRefresh()
    logout(refresh)
    setOpen(false)
  }

  return (
    <Sidebar className="z-40  right-0 top-20 mt-0  p-4 w-64 shadow-xl " side="right">
      <div className="space-y-4">
        <div className="text-sm text-muted-foreground">
          <h2 className="text-base font-semibold">Email:</h2>
          <p>{user?.email ?? "Unknown"}</p> 
        </div>

        <div className="space-y-2">
          <Link href={`/my_blogs/${user?.id ?? ""}`}> 
            <Button className="w-full justify-start gap-2" variant="outline">
              <BookOpenText size={16} />
              My Blogs
            </Button>
          </Link>

          <Dialog open={openModel} onOpenChange={setModelOpen}>
            <DialogTrigger asChild>
              <Button className="w-full justify-start gap-2" variant="outline">
                <Plus size={16} />
                Create Blog
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader> 
                <DialogTitle>Create a Blog</DialogTitle>
                <DialogDescription>Fill out the form to create a new blog.</DialogDescription>
              </DialogHeader>

              <DialogDemo onClose={() => setModelOpen(false)} />

              <DialogFooter /> 
            </DialogContent>
          </Dialog>

          <Button
            disabled={isLoading} 
            className="w-full justify-start gap-2"
            variant="destructive"
            onClick={logoutUser}
          >
            <LogOut size={16} />
            {isLoading ? "Logging out..." : "Logout"}
          </Button>
        </div>
      </div>
    </Sidebar>
  )
}
