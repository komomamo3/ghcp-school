import type { Locale } from '../i18n';

type Bilingual<T> = Record<Locale, T>;

export interface FeatureItem {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  href: string;
}

export const homeFeatures: Bilingual<FeatureItem[]> = {
  ja: [
    {
      eyebrow: '01 — About',
      title: '山あいに生まれた、新しい高専。',
      body: '徳島県神山町に2023年4月開校。テクノロジー、デザイン、起業家精神を5年間で横断的に学びます。',
      image:
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80',
      href: '/about/',
    },
    {
      eyebrow: '02 — Education',
      title: 'モノをつくる力で、コトを起こす人へ。',
      body: '情報・デザイン・起業家精神を編み込んだ独自のカリキュラム。プロジェクト中心の学びで実践力を養います。',
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
      href: '/education/',
    },
    {
      eyebrow: '03 — Campus',
      title: '町まるごとがキャンパス。',
      body: '森と川に囲まれた寮制キャンパス。地域に開かれた施設で、学生・教員・町民が交わります。',
      image:
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80',
      href: '/campus/',
    },
  ],
  en: [
    {
      eyebrow: '01 — About',
      title: 'A new KOSEN, born in the mountains.',
      body: 'Opened in April 2023 in Kamiyama, Tokushima — a five-year program weaving technology, design, and entrepreneurship.',
      image:
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80',
      href: '/about/',
    },
    {
      eyebrow: '02 — Education',
      title: 'From makers to founders.',
      body: 'A project-based curriculum that interweaves engineering, design, and entrepreneurship over five years.',
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
      href: '/education/',
    },
    {
      eyebrow: '03 — Campus',
      title: 'The whole town is our campus.',
      body: 'A residential campus surrounded by forests and rivers, open to the community of Kamiyama.',
      image:
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80',
      href: '/campus/',
    },
  ],
};

export const heroCopy: Bilingual<{ eyebrow: string; title: string; lead: string }> = {
  ja: {
    eyebrow: 'Kamiyama Marugoto College of Technology',
    title: 'モノをつくる力で、\nコトを起こす人を育てる。',
    lead: '徳島県神山町に2023年に開校した、私立の5年制高等専門学校。テクノロジー × デザイン × 起業家精神で、社会に新しい価値を生み出す人を育てます。',
  },
  en: {
    eyebrow: 'Kamiyama Marugoto College of Technology',
    title: 'Where makers become\nfounders.',
    lead: 'A private 5-year KOSEN opened in 2023 in Kamiyama, Tokushima. We nurture people who create new value through technology, design, and entrepreneurship.',
  },
};
