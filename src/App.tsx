import React from 'react'

const features = [
  {
    title: '풍부한 비타민',
    body: '비타민 C와 식이섬유를 한 번에. 바쁜 하루를 위한 산뜻한 한 컷을 채워 보세요.',
    icon: (
      <span className="text-3xl" aria-hidden>
        ◎
      </span>
    ),
  },
  {
    title: '레드 과육',
    body: '보석 같은 붉은 과육과 부드러운 식감. 키위의 상큼함에 베리 풍미를 더한 특별한 조합입니다.',
    icon: (
      <span className="text-3xl" aria-hidden>
        ●
      </span>
    ),
  },
  {
    title: '고당도',
    body: '잘 익은 과육의 자연스러운 단맛. 인공적인 느낌 없이 입안 가득 퍼지는 달콤함을 느껴 보세요.',
    icon: (
      <span className="text-3xl" aria-hidden>
        ✦
      </span>
    ),
  },
] as const

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface text-ink antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-ruby focus:px-4 focus:py-2 focus:text-white"
      >
        본문으로 건너뛰기
      </a>

      <header className="sticky top-0 z-40 border-b border-ruby/10 bg-surface/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div className="flex items-center gap-2">
            <span
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-ruby to-ruby-dark text-sm font-bold text-white shadow-lg shadow-ruby/25"
              aria-hidden
            >
              R
            </span>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-ruby">RUBY KIWI</p>
              <p className="text-sm font-medium text-ink">루비키위</p>
            </div>
          </div>
          <nav className="flex items-center gap-1 text-sm font-medium text-muted sm:gap-4" aria-label="주요 메뉴">
            <a href="#features" className="rounded-lg px-2 py-1.5 hover:bg-ruby/5 hover:text-ruby sm:px-3">
              특징
            </a>
            <a href="#purchase" className="rounded-lg px-2 py-1.5 hover:bg-ruby/5 hover:text-ruby sm:px-3">
              구매 안내
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section
          className="relative overflow-hidden border-b border-ruby/10 bg-gradient-to-br from-surface via-surface-2 to-white"
          aria-labelledby="hero-heading"
        >
          <div
            className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-kiwi/35 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-ruby/20 blur-3xl"
            aria-hidden
          />

          <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-ruby/15 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ruby shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-kiwi" aria-hidden />
              Premium Red Kiwifruit
            </p>
            <h1
              id="hero-heading"
              className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl"
            >
              <span className="bg-gradient-to-r from-ruby via-ruby-dark to-ruby bg-clip-text text-transparent">
                루비키위
              </span>
              <span className="text-ink"> — </span>
              <span className="text-ink/90">한 입에 담긴 루비빛 에너지</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              붉은 과육과 키위 특유의 상큼함, 그리고 자연스러운 단맛이 만나 탄생한{' '}
              <strong className="font-semibold text-ink">Ruby Kiwi</strong>. 건강한 간식과 테이블 위 포인트를 동시에
              완성합니다.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#purchase"
                className="inline-flex items-center justify-center rounded-full bg-ruby px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-ruby/30 transition hover:bg-ruby-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-kiwi focus-visible:ring-offset-2"
              >
                구매 안내 보기
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border-2 border-kiwi/80 bg-white/90 px-8 py-3.5 text-sm font-semibold text-ink transition hover:border-ruby hover:bg-ruby/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ruby focus-visible:ring-offset-2"
              >
                특징 살펴보기
              </a>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24"
          aria-labelledby="features-heading"
        >
          <div className="mb-12 max-w-2xl">
            <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              왜 <span className="text-ruby">루비키위</span>인가요?
            </h2>
            <p className="mt-3 text-muted">세 가지 핵심으로 만나는 프리미엄 레드 키위 경험입니다.</p>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <li key={item.title}>
                <article className="group h-full rounded-2xl border border-ruby/10 bg-white p-6 shadow-sm transition hover:border-kiwi/50 hover:shadow-lg hover:shadow-kiwi/10">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-ruby/10 to-kiwi/20 text-ruby transition group-hover:from-ruby/20 group-hover:to-kiwi/30">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{item.body}</p>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="purchase"
          className="border-t border-ruby/10 bg-gradient-to-br from-ruby via-ruby-dark to-[#6a0833] px-4 py-20 text-white sm:px-6 sm:py-24"
          aria-labelledby="purchase-heading"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-kiwi-soft">Shop</p>
            <h2 id="purchase-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              구매 안내
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">
              공식 온라인 스토어와 제휴 오프라인 매장에서 루비키위를 만나실 수 있습니다. 시즌·재고는 지역과 시기에 따라
              달라질 수 있으니, 방문 전 채널별 공지를 확인해 주세요.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://github.com/rokmc1893/Google-AI-Agent"
                className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-kiwi px-8 py-3.5 text-sm font-bold text-ink shadow-lg shadow-black/20 transition hover:bg-kiwi-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ruby sm:w-auto"
                rel="noreferrer"
              >
                프로젝트 저장소
              </a>
              <button
                type="button"
                className="inline-flex w-full max-w-xs items-center justify-center rounded-full border-2 border-white/40 bg-white/10 px-8 py-3.5 text-sm font-semibold backdrop-blur transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-kiwi focus-visible:ring-offset-2 focus-visible:ring-offset-ruby sm:w-auto"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                맨 위로
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ruby/10 bg-ink py-8 text-center text-sm text-white/70">
        <p>© {new Date().getFullYear()} Ruby Kiwi · 루비키위 랜딩</p>
      </footer>
    </div>
  )
}

export default App
