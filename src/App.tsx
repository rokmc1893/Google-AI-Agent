import React, { useCallback, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Language = 'kr' | 'en'

type Copy = {
  brand: string
  navHome: string
  navProduct: string
  navContact: string
  heroKicker: string
  heroTitleLine1: string
  heroTitleLine2: string
  heroLead: string
  heroCta: string
  articleH2: string
  articleP1: string
  articleP2: string
  figureTitle: string
  figureCaption: string
  seasonEyebrow: string
  seasonTitle: string
  seasonDesc: string
  seasonNote: string
  seasonPeak: string
  nutritionH2: string
  nutritionP: string
  wellbeingH2: string
  wellbeingP: string
  learnMore: string
  ctaTitle: string
  ctaBody: string
  ctaButton: string
  heroNaturally: string
  heroBerrySweet: string
  bottomBannerTitle: string
  navTagline: string
}

const KIWI = {
  masthead: '/rubyred-masthead.jpg',
  blog: '/rubyred-blog.png',
  product: '/rubyred-product.png',
  middle: '/rubyred-middle.jpg',
  mobile: '/rubyred-mobile.png',
  heroSlice: '/ruby-kiwi-hero-extra-2.png',
} as const

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const COPY: Record<Language, Copy> = {
  kr: {
    brand: 'RUBY KIWI',
    navHome: '루비레드 키위',
    navProduct: '키위와 건강',
    navContact: '구매하기',
    heroKicker: 'Rubyred Kiwifruit',
    heroTitleLine1: '한정 기간에만 판매되는',
    heroTitleLine2: '특별한 루비레드 키위의 맛을 느껴보세요!',
    heroLead:
      '20여 년에 걸쳐 개발된 루비레드 키위는 3월 ~ 5월 사이에 만날 수 있는 특별한 품종입니다. 보석처럼 붉은 과육과 베리처럼 부드러운 달콤함을 경험해 보세요.',
    heroCta: '구매하기',
    articleH2: '보석처럼 붉은 과육',
    articleP1:
      '루비레드 키위의 붉은 과육은 보기에만 예쁜 것이 아닙니다. 잘 익은 베리같이 부드러운 달콤함과 입안 가득 넘치는 과즙이 일품입니다.',
    articleP2:
      '한정 기간에만 판매되는 특별한 맛을 더 많은 분들이 쉽게 이해할 수 있도록, 이미지와 짧은 설명 중심의 블로그형 구성으로 정리했습니다.',
    figureTitle: '희귀한 레드 키위 품종',
    figureCaption: '20년 이상의 시간을 거쳐 재배된 품종으로, 짧은 시즌 동안 선명한 컬러와 산뜻한 향을 즐길 수 있습니다.',
    seasonEyebrow: 'Availability',
    seasonTitle: '구매 가능 시기: 3월 ~ 5월',
    seasonDesc: '루비레드 키위는 봄 시즌에 집중적으로 소개되는 한정 과일입니다.',
    seasonNote: '구매 가능 시점은 매년 유통 상황에 따라 상이할 수 있습니다.',
    seasonPeak: 'MAR - MAY',
    nutritionH2: '풍부한 영양',
    nutritionP:
      '루비레드 키위는 항산화 물질인 안토시아닌을 함유하고 있습니다. 과일 내에서 자연적으로 생성되는 이 색소는 과육을 붉게 만들고, 작은 과일 하나에 100% 천연의 영양을 담아줍니다.',
    wellbeingH2: '몸과 마음을 즐겁게 만들어주는 루비레드 키위',
    wellbeingP:
      '상큼한 향, 부드러운 식감, 선명한 컬러가 함께 어우러져 간식으로도 식탁 위 포인트로도 잘 어울립니다.',
    learnMore: '자세히 알아보기',
    ctaTitle: '루비레드 키위를 직접 맛보세요!',
    ctaBody: '공식 네이버 브랜드스토어와 온/오프라인 채널에서 만나보실 수 있습니다.',
    ctaButton: '구매하기',
    heroNaturally: 'Naturally',
    heroBerrySweet: 'BERRY SWEET',
    bottomBannerTitle: 'RUBY KIWI만의 특별한 맛!',
    navTagline: '루비레드 키위  ·  키위와 건강  ·  구매하기',
  },
  en: {
    brand: 'RUBY KIWI',
    navHome: 'Kiwifruit',
    navProduct: 'Health',
    navContact: 'Shop',
    heroKicker: 'Rubyred Kiwifruit',
    heroTitleLine1: 'Available for a limited time only',
    heroTitleLine2: 'Taste the special RubyRed kiwifruit',
    heroLead:
      'A special variety developed over 20 years, available around March to May. Enjoy jewel-like red flesh, berry-soft sweetness, and juicy freshness.',
    heroCta: 'Shop now',
    articleH2: 'Jewel-like red flesh',
    articleP1:
      'RubyRed kiwifruit is not only beautiful to look at. It offers soft berry-like sweetness and a juicy bite.',
    articleP2:
      'This clean editorial layout follows the original article flow with short sections, vivid images, and direct purchase cues.',
    figureTitle: 'A rare red kiwifruit variety',
    figureCaption: 'Developed over many years, RubyRed is enjoyed during a short season with vivid color and fresh aroma.',
    seasonEyebrow: 'Availability',
    seasonTitle: 'Available around March ~ May',
    seasonDesc: 'RubyRed kiwifruit is introduced mainly during the spring season.',
    seasonNote: 'Exact retail timing may vary each year depending on supply.',
    seasonPeak: 'MAR - MAY',
    nutritionH2: 'Naturally rich nutrition',
    nutritionP:
      'RubyRed kiwifruit contains anthocyanins, the naturally occurring pigments behind its red color, alongside nutrients from whole fruit.',
    wellbeingH2: 'RubyRed kiwifruit for body and mood',
    wellbeingP:
      'Bright color, fresh aroma, and a gentle bite make it easy to enjoy as a snack or a colorful table accent.',
    learnMore: 'Learn more',
    ctaTitle: 'Taste RubyRed kiwifruit',
    ctaBody: 'Find it through official online channels and selected stores.',
    ctaButton: 'Shop now',
    heroNaturally: 'Naturally',
    heroBerrySweet: 'BERRY SWEET',
    bottomBannerTitle: 'The one-of-a-kind taste of RUBY KIWI!',
    navTagline: 'Ruby kiwi  ·  Health  ·  Shop',
  },
}

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('kr')
  const text = COPY[language]

  const scrollToSection = useCallback((id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const rootRef = useRef<HTMLDivElement>(null)

  // Hero refs
  const heroRef = useRef<HTMLElement>(null)
  const heroBgRef = useRef<HTMLImageElement>(null)
  const heroDimRef = useRef<HTMLDivElement>(null)
  const heroTextRef = useRef<HTMLDivElement>(null)

  // Product / editorial figure
  const productRef = useRef<HTMLElement>(null)
  const productImageRef = useRef<HTMLImageElement>(null)

  // Season refs
  const seasonRef = useRef<HTMLElement>(null)
  const seasonCardRef = useRef<HTMLDivElement>(null)
  const seasonBarRef = useRef<HTMLDivElement>(null)

  // CTA refs
  const ctaRef = useRef<HTMLElement>(null)
  const ctaButtonRef = useRef<HTMLButtonElement>(null)

  // ---------------------------------------------------------------------------
  // Hero animation: full-bleed background + light dim shift on scroll
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      if (!heroRef.current || !heroBgRef.current || !heroDimRef.current || !heroTextRef.current) {
        return
      }

      mm.add('(min-width: 768px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: '+=200%',
            scrub: true,
          },
        })

        gsap.set(heroDimRef.current, { autoAlpha: 0.75 })

        tl.to(
          heroBgRef.current,
          {
            scale: 1.1,
            ease: 'none',
            duration: 1.2,
          },
          0,
        )
          .to(
            heroDimRef.current,
            {
              autoAlpha: 0.92,
              ease: 'none',
              duration: 1.1,
            },
            0,
          )
          .to(
            heroTextRef.current,
            {
              autoAlpha: 0,
              y: -30,
              ease: 'none',
              duration: 0.95,
            },
            0.4,
          )
      })

      mm.add('(max-width: 767px)', () => {
        gsap.set(heroDimRef.current, { autoAlpha: 0.8 })

        gsap.to(heroBgRef.current, {
          scale: 1.08,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })

        gsap.to(heroDimRef.current, {
          autoAlpha: 0.95,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })

        gsap.to(heroTextRef.current, {
          autoAlpha: 0.25,
          y: -12,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  // ---------------------------------------------------------------------------
  // Product figure: subtle reveal on scroll
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!productRef.current || !productImageRef.current) return

      gsap.fromTo(
        productImageRef.current,
        { autoAlpha: 0.85, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          ease: 'power2.out',
          duration: 1,
          scrollTrigger: {
            trigger: productRef.current,
            start: 'top 78%',
          },
        },
      )
    }, rootRef)

    return () => ctx.revert()
  }, [])

  // ---------------------------------------------------------------------------
  // Season section animation
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!seasonRef.current || !seasonCardRef.current || !seasonBarRef.current) return

      gsap.fromTo(
        seasonCardRef.current,
        { autoAlpha: 0, y: 34 },
        {
          autoAlpha: 1,
          y: 0,
          ease: 'power3.out',
          duration: 1.4,
          scrollTrigger: {
            trigger: seasonRef.current,
            start: 'top 78%',
          },
        },
      )

      gsap.fromTo(
        seasonBarRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1,
          ease: 'power3.out',
          duration: 1.4,
          scrollTrigger: {
            trigger: seasonRef.current,
            start: 'top 72%',
          },
        },
      )
    }, rootRef)

    return () => ctx.revert()
  }, [])

  // ---------------------------------------------------------------------------
  // CTA animation
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!ctaRef.current || !ctaButtonRef.current) return

      gsap.fromTo(
        ctaRef.current,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          ease: 'power3.out',
          duration: 1.3,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
          },
        },
      )

      gsap.to(ctaButtonRef.current, {
        boxShadow: '0 0 34px rgba(159,31,60,0.45)',
        repeat: -1,
        yoyo: true,
        duration: 1.8,
        ease: 'power3.out',
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  // ---------------------------------------------------------------------------
  // Smooth language text transition
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-i18n]',
        { autoAlpha: 0.4, y: 6 },
        { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.018, ease: 'power3.out' },
      )
    }, rootRef)

    return () => ctx.revert()
  }, [language])

  return (
    <div
      ref={rootRef}
      className="min-h-screen bg-gradient-to-br from-shell via-rose-mist/55 to-cream font-sans text-stone-900 antialiased"
    >
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ruby/10 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-8">
          <div className="min-w-0 text-left">
            <button
              type="button"
              onClick={() => scrollToSection('top')}
              data-i18n
              className="block text-sm font-extrabold tracking-[0.2em] text-[#c91840] sm:text-base"
            >
              {text.brand}
            </button>
            <p
              data-i18n
              className="mt-0.5 hidden text-[10px] font-medium leading-snug text-stone-500 min-[400px]:block sm:text-[11px]"
            >
              {text.navTagline}
            </p>
          </div>

          <nav
            className="hidden min-[480px]:flex max-w-min shrink-0 items-center gap-4 text-[11px] font-medium text-stone-600 sm:gap-6 sm:text-xs"
            aria-label="Primary"
          >
            <button type="button" data-i18n onClick={() => scrollToSection('top')} className="whitespace-nowrap transition hover:text-ruby">
              {text.navHome}
            </button>
            <button type="button" data-i18n onClick={() => scrollToSection('nutrition')} className="whitespace-nowrap transition hover:text-ruby">
              {text.navProduct}
            </button>
            <button type="button" data-i18n onClick={() => scrollToSection('contact')} className="whitespace-nowrap transition hover:text-ruby">
              {text.navContact}
            </button>
          </nav>

          <div className="flex shrink-0 items-center gap-0.5 text-[11px] font-medium text-stone-500 sm:text-xs">
            <button
              type="button"
              onClick={() => setLanguage('kr')}
              className={`px-1 transition ${language === 'kr' ? 'font-semibold text-ruby' : 'hover:text-stone-800'}`}
            >
              KR
            </button>
            <span className="text-stone-300">|</span>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-1 transition ${language === 'en' ? 'font-semibold text-ruby' : 'hover:text-stone-800'}`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <section ref={heroRef} id="top" className="border-b border-ruby/10 bg-ivory-rose pb-12 pt-16 sm:pb-20 sm:pt-[4.75rem]">
        <div className="relative mx-auto max-w-6xl px-0 sm:px-4">
          {/* 참고: 구 기획안 스타일 — 할프톤 레드, 메인 키위, Naturally / BERRY SWEET (이미지 내 타사 스티커는 패치로 가림) */}
          <div className="relative overflow-hidden sm:rounded-[2rem] sm:ring-1 sm:ring-white/20">
            <div className="bg-halftone-hero absolute inset-0" aria-hidden />
            <div
              ref={heroDimRef}
              className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/20"
            />
            <div className="relative z-10 grid min-h-[min(64vh,620px)] items-center gap-6 px-4 py-10 sm:grid-cols-2 sm:gap-2 sm:px-8 sm:py-12 lg:min-h-[min(70vh,680px)]">
              <div className="relative flex min-h-[240px] items-center justify-center sm:min-h-[320px]">
                <div
                  className="pointer-events-none absolute left-1/2 top-1/2 h-[min(100vw,24rem)] w-[min(100vw,24rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25 blur-3xl"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rotate-3 rounded-full border-2 border-white/35"
                  aria-hidden
                />
                <div className="relative z-10 w-full max-w-md px-2">
                  <img
                    ref={heroBgRef}
                    src={KIWI.masthead}
                    alt="RUBY KIWI — 레드 키위"
                    className="relative z-10 mx-auto w-full max-w-[20rem] object-contain drop-shadow-2xl sm:max-w-[24rem]"
                    fetchPriority="high"
                  />
                  <div
                    className="absolute bottom-[6%] left-[4%] z-20 h-8 w-[4.2rem] rounded-sm bg-gradient-to-br from-stone-900/95 to-stone-800/90 shadow-sm ring-1 ring-black/20 sm:bottom-[8%] sm:left-[8%] sm:h-9"
                    title=""
                    role="presentation"
                    aria-hidden
                  />
                  <img
                    src={KIWI.heroSlice}
                    alt=""
                    className="absolute -right-1 top-0 z-20 w-24 -rotate-6 object-contain drop-shadow-lg sm:-right-2 sm:top-2 sm:w-32 sm:rotate-12"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center px-2 text-center sm:items-end sm:pr-2 sm:text-right">
                <p
                  data-i18n
                  className="font-hero-script text-4xl leading-tight text-white drop-shadow-sm sm:text-5xl md:text-6xl"
                >
                  {text.heroNaturally}
                </p>
                <p
                  data-i18n
                  className="font-hero-display mt-1 text-4xl leading-[0.9] tracking-[0.12em] text-amber-100 drop-shadow-md sm:mt-2 sm:text-6xl md:text-7xl"
                >
                  {text.heroBerrySweet}
                </p>
                <p data-i18n className="mt-5 max-w-sm text-pretty text-xs font-medium text-white/90 sm:mt-7 sm:text-sm">
                  {text.heroKicker} · {text.heroTitleLine1} {text.heroTitleLine2}
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 mx-auto -mt-6 max-w-3xl px-4 sm:-mt-10 sm:px-0">
            <div
              ref={heroTextRef}
              className="rounded-2xl bg-panel/95 p-7 text-center shadow-xl shadow-ruby/10 ring-1 ring-ruby/12 backdrop-blur-sm sm:p-9"
            >
              <h1 className="text-balance">
                <span
                  data-i18n
                  className="block text-xl font-bold leading-tight tracking-tight text-stone-900 sm:text-2xl"
                >
                  {text.heroTitleLine1}
                </span>
                <span
                  data-i18n
                  className="mt-0.5 block text-xl font-bold leading-tight tracking-tight text-stone-900 sm:text-2xl"
                >
                  {text.heroTitleLine2}
                </span>
              </h1>
              <p
                data-i18n
                className="mx-auto mt-4 max-w-prose text-left text-sm leading-relaxed text-stone-600 sm:text-base"
              >
                {text.heroLead}
              </p>
              <button
                data-i18n
                type="button"
                onClick={() => scrollToSection('contact')}
                className="mt-8 inline-flex rounded-full bg-ruby px-8 py-3 text-sm font-semibold text-white shadow-md shadow-ruby/25 transition hover:bg-ruby-deep"
              >
                {text.heroCta}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="scroll-mt-24 border-b border-ruby/10 bg-cream py-14 sm:py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 sm:grid-cols-[1fr_0.9fr] sm:px-6">
          <div>
            <h2 data-i18n className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
              {text.articleH2}
            </h2>
            <p data-i18n className="mt-6 text-base leading-relaxed text-stone-600 sm:text-[1.05rem]">
              {text.articleP1}
            </p>
            <p data-i18n className="mt-4 text-base leading-relaxed text-stone-600 sm:text-[1.05rem]">
              {text.articleP2}
            </p>
          </div>
          <img
            src={KIWI.blog}
            alt="RubyRed kiwifruit detail"
            className="w-full rounded-[1.75rem] bg-shell object-cover shadow-sm ring-1 ring-ruby/12"
            loading="lazy"
          />
        </div>
      </section>

      <section
        ref={productRef}
        id="product"
        className="scroll-mt-24 border-b border-ruby/10 bg-shell py-14 sm:py-20"
      >
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 sm:grid-cols-2 sm:gap-14 sm:px-6">
          <div className="overflow-hidden rounded-[1.75rem] bg-panel/90 shadow-md ring-1 ring-ruby/12 backdrop-blur-sm">
            <img
              ref={productImageRef}
              src={KIWI.product}
              alt="RubyRed kiwifruit pack"
              className="aspect-[4/3] w-full object-contain p-8 sm:aspect-auto sm:h-full sm:min-h-[320px]"
              loading="lazy"
            />
          </div>
          <div>
            <h2 data-i18n className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
              {text.figureTitle}
            </h2>
            <p data-i18n className="mt-5 text-base leading-relaxed text-stone-600 sm:text-[1.05rem]">
              {text.figureCaption}
            </p>
          </div>
        </div>
      </section>

      <section
        ref={seasonRef}
        className="relative scroll-mt-24 overflow-hidden border-b border-ruby/10 bg-ivory-rose px-5 py-16 sm:px-6 sm:py-20 md:px-8"
      >
        <img
          src={KIWI.middle}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.12]"
        />
        <div
          ref={seasonCardRef}
          className="relative z-10 mx-auto max-w-5xl rounded-[1.75rem] border border-ruby/12 bg-panel/92 p-8 shadow-sm backdrop-blur-sm sm:p-10"
        >
          <p data-i18n className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.28em] text-ruby">
            {text.seasonEyebrow}
          </p>
          <h2 data-i18n className="mb-3 text-center text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            {text.seasonTitle}
          </h2>
          <p data-i18n className="mx-auto mb-2 max-w-2xl text-center text-sm leading-relaxed text-stone-600 sm:text-base">
            {text.seasonDesc}
          </p>
          <p data-i18n className="mx-auto mb-10 max-w-2xl text-center text-xs leading-relaxed text-stone-500 sm:text-sm">
            {text.seasonNote}
          </p>

          <div className="relative mx-auto max-w-4xl">
            <div className="h-2.5 rounded-full bg-ruby/10" />
            <div
              ref={seasonBarRef}
              className="absolute inset-y-0 left-[16.666%] w-1/4 rounded-full bg-gradient-to-r from-[#d21f58] to-[#f0658b] shadow-[0_0_20px_rgba(210,31,88,0.28)]"
            />

            <div className="mt-3 grid grid-cols-12 gap-1 text-[10px] font-medium uppercase tracking-wide text-stone-500 sm:text-xs">
              {MONTHS.map((month, idx) => (
                <span key={month} className={`text-center ${idx >= 2 && idx <= 4 ? 'font-semibold text-[#d21f58]' : ''}`}>
                  {month}
                </span>
              ))}
            </div>

            <div className="mt-5 flex justify-center">
              <span
                data-i18n
                className="rounded-full border border-[#d21f58]/25 bg-[#d21f58]/5 px-4 py-1.5 text-xs font-medium tracking-wide text-[#d21f58]"
              >
                {text.seasonPeak}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="nutrition" className="scroll-mt-24 border-b border-ruby/10 bg-cream py-14 sm:py-16">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 sm:grid-cols-[0.9fr_1fr] sm:px-6">
          <img
            src={KIWI.mobile}
            alt="RubyRed kiwifruit nutrition"
            className="mx-auto w-full max-w-sm rounded-[1.75rem] object-cover shadow-sm ring-1 ring-ruby/12"
            loading="lazy"
          />
          <div>
            <h2 data-i18n className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
              {text.nutritionH2}
            </h2>
            <p data-i18n className="mt-6 text-base leading-relaxed text-stone-600 sm:text-[1.05rem]">
              {text.nutritionP}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-ruby/10 bg-rose-mist/45 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <img
            src={KIWI.middle}
            alt="RubyRed kiwifruit banner"
            className="mb-10 aspect-[16/7] w-full rounded-[1.75rem] object-cover shadow-sm ring-1 ring-ruby/12"
            loading="lazy"
          />
          <h2 data-i18n className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            {text.wellbeingH2}
          </h2>
          <p data-i18n className="mt-6 max-w-3xl text-base leading-relaxed text-stone-600 sm:text-[1.05rem]">
            {text.wellbeingP}
          </p>
          <button
            data-i18n
            type="button"
            onClick={() => scrollToSection('nutrition')}
            className="mt-8 inline-flex rounded-full border border-ruby/35 bg-transparent px-5 py-2.5 text-sm font-semibold text-ruby transition hover:bg-ruby hover:text-white"
          >
            {text.learnMore}
          </button>
        </div>
      </section>

      <section
        ref={ctaRef}
        id="contact"
        className="scroll-mt-24 border-b border-ruby/10 bg-ivory-rose"
      >
        <div className="relative overflow-hidden bg-gradient-to-b from-[#c91840] via-[#a81435] to-[#7a0c28] px-5 py-16 text-center sm:px-8 sm:py-24">
          <div
            className="pointer-events-none absolute inset-0 bg-halftone-hero opacity-40 mix-blend-multiply"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-white/10 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-amber-200/10 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center">
            <p
              data-i18n
              className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              {text.bottomBannerTitle}
            </p>
            <h2 data-i18n className="mt-6 text-lg font-semibold text-white/95 sm:text-2xl">
              {text.ctaTitle}
            </h2>
            <p data-i18n className="mt-3 max-w-prose text-sm leading-relaxed text-white/90 sm:text-base">
              {text.ctaBody}
            </p>
            <div className="mt-8 flex items-center justify-center gap-4" aria-hidden>
              <div className="h-10 w-10 rounded-full bg-gradient-to-b from-lime-300 to-emerald-800 shadow-md ring-2 ring-white/30 sm:h-12 sm:w-12" />
              <div className="h-10 w-10 -translate-y-1 rounded-full bg-gradient-to-b from-lime-200 to-emerald-900 shadow-md ring-2 ring-white/30 sm:h-12 sm:w-12" />
            </div>
            <button
              ref={ctaButtonRef}
              data-i18n
              type="button"
              onClick={() => scrollToSection('top')}
              className="mt-10 rounded-full bg-white px-10 py-3.5 text-sm font-bold text-[#a81435] shadow-lg shadow-black/20 transition hover:bg-amber-50"
            >
              {text.ctaButton}
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-ruby/10 bg-panel/95 py-8 text-center text-xs text-stone-500 backdrop-blur-sm">
        © {new Date().getFullYear()} RUBY KIWI
      </footer>
    </div>
  )
}

export default App
