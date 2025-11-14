import { useLayoutEffect, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

// Hook de : http://usehooks-ts.com/react-hook/use-document-title
// Tweak pour integrer la traduction et la gestion du titre avec i18n. 

type UseDocumentTitleOptions = {
  preserveTitleOnUnmount?: boolean
  suffix?: string
  raw?: boolean
}

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export function useDocumentTitle(
  keyOrTitle: string,
  { preserveTitleOnUnmount = true, suffix, raw = false }: UseDocumentTitleOptions = {}
) {
  const { t, i18n } = useTranslation()
  const defaultTitleRef = useRef<string | null>(null)

  useIsomorphicLayoutEffect(() => {
    if (defaultTitleRef.current == null) {
      defaultTitleRef.current = window.document.title
    }
  }, [])

  const translated = raw ? keyOrTitle : t(keyOrTitle)
  const finalTitle = suffix ? `${translated}${suffix}` : translated

  useIsomorphicLayoutEffect(() => {
    if (finalTitle) {
      window.document.title = finalTitle
    }
    return () => {
      if (!preserveTitleOnUnmount && defaultTitleRef.current) {
        window.document.title = defaultTitleRef.current
      }
    }
  }, [finalTitle, i18n.language, preserveTitleOnUnmount])
}