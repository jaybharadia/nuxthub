import { ref, onMounted, onUnmounted } from 'vue'

export function useTypewriter(phrases: string[], options = { 
  typingSpeed: 100,
  deletingSpeed: 50,
  pauseDuration: 2000 
}) {
  const text = ref('')
  let currentPhraseIndex = 0
  let isDeleting = false
  let timeout: NodeJS.Timeout

  const type = () => {
    const currentPhrase = phrases[currentPhraseIndex]
    
    if (isDeleting) {
      text.value = currentPhrase.substring(0, text.value.length - 1)
    } else {
      text.value = currentPhrase.substring(0, text.value.length + 1)
    }

    let typeSpeed = isDeleting ? options.deletingSpeed : options.typingSpeed

    if (!isDeleting && text.value === currentPhrase) {
      typeSpeed = options.pauseDuration
      isDeleting = true
    } else if (isDeleting && text.value === '') {
      isDeleting = false
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length
    }

    timeout = setTimeout(type, typeSpeed)
  }

  onMounted(() => {
    type()
  })

  onUnmounted(() => {
    clearTimeout(timeout)
  })

  return {
    text
  }
}