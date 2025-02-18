import React, { useContext } from 'react'
import { SubServicesContext } from '../context/SubServicesProvider'

export const useSubServices = () => {
  const context = useContext(SubServicesContext)

    if(!context ) {
        throw new Error('useSubservices debe ser usado dentro de un SubServicesProvider')
    }
    return context
}