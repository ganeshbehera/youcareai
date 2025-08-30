"use client"

import { useState } from 'react'

export function useWaitlistModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [modalConfig, setModalConfig] = useState({
    title: "Join the Waitlist",
    description: "Be among the first 10,000 users to get early access and 6 months free when we launch."
  })

  const openModal = (title?: string, description?: string) => {
    if (title || description) {
      setModalConfig({
        title: title || modalConfig.title,
        description: description || modalConfig.description
      })
    }
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return {
    isOpen,
    openModal,
    closeModal,
    modalConfig
  }
}
