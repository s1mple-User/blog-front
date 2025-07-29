import { Button } from '@/components/ui/button'
import React from 'react'

const Footer = () => {
  return (
<div className="static w-full bottom-1 bg-blue-900 text-white px-10 py-16 mt-10 text-base">
  <div className="flex flex-col md:flex-row items-start justify-center gap-20 flex-wrap">
    
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-bold mb-4">Programming Languages</h1>
      <a className="hover:underline">JavaScript</a>
      <a className="hover:underline">Python</a>
      <a className="hover:underline">C#</a>
      <a className="hover:underline">Java</a>
      <a className="hover:underline">C++</a>
    </div>

    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-bold mb-4">Frontend / Backend</h1>
      <div className="flex flex-col sm:flex-row gap-10">
        <div className="flex flex-col gap-3">
          <a href="#" className="hover:underline">React</a>
          <a href="#" className="hover:underline">Vue</a>
          <a href="#" className="hover:underline">Angular</a>
        </div>

        <div className="flex flex-col gap-3">
          <a href="#" className="hover:underline">Node.js</a>
          <a href="#" className="hover:underline">Django</a>
        </div>
      </div>
    </div>

    <div className="flex flex-col gap-3 min-w-[200px]">
      <h1 className="text-2xl font-bold mb-4">Dev Tools</h1>
      <a className="hover:underline">Git & GitHub</a>
      <a className="hover:underline">Docker</a>
      <a className="hover:underline">CI/CD</a>
    </div>

    <div className="flex flex-col gap-3 min-w-[200px]">
      <h1 className="text-2xl font-bold mb-4">Databases</h1>
      <a className="hover:underline">PostgreSQL</a>
      <a className="hover:underline">MongoDB</a>
      <a className="hover:underline">MySQL</a>
      <a className="hover:underline">Redis</a>
    </div>

  </div>
</div>
  )
}

export default Footer
