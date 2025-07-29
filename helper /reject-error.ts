export const rejectError = (data: unknown): any => {

  if (Array.isArray(data)) {
    return data
  }

  if (typeof data === 'object' && data !== null) {
    if ('response' in data && typeof (data as any).response?.data === 'object') {
      const responseData = (data as any).response.data
      if (Array.isArray(responseData)) {
        return responseData
      } else if ('message' in responseData) {
        return { message: responseData.message }
      }
      return responseData
    }

    if ('message' in data) {
      return { message: (data as any).message }
    }

    return data
  }

  if (typeof data === 'string') {
    return { message: data }
  }
  return { message: 'Unknown error' }
}
