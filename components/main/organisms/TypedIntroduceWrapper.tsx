'use client'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

function createTypedInstance(el: HTMLElement) {
  return new Typed(el, {
    stringsElement: '#bios',
    typeSpeed: 40,
    backSpeed: 10,
    loop: true,
    backDelay: 1000,
  })
}

export function TypedIntroduceWrapper() {
  const typedRef = useRef(null)

  useEffect(() => {
    const options = {
      strings: [
        'Chào mừng bạn đã đến với AI Agent Việt Nam 🇻🇳',
        `Nơi chia sẻ những kiến thức về AI Agent cho cộng đồng Việt Nam 💻`,
        'Tiếp cận kiến thức AI Agent miễn phí 🔗',
        'Giúp cho các doanh nghiệp tiếp cận AI để tối ưu hoá hiệu quả công việc 🌐',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    }

    const typed = new Typed(typedRef.current, options)

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div className="min-h-42 py-4">
      <span className="text-xl leading-7 text-gray-500 dark:text-gray-300" ref={typedRef}></span>
    </div>
  )
}
