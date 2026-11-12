import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { STUDIO_INFO } from '../data/studioData';

interface SEOHeadProps {
  title: string;
  description: string;
  image?: string;
  canonicalPath?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  image = '/images/hero-living.jpg',
  canonicalPath,
}) => {
  const location = useLocation();
  const currentPath = canonicalPath || location.pathname;

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Update Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Update Open Graph Meta
    const setMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('og:title', title);
    setMeta('og:description', description);
    setMeta('og:image', image);
    setMeta('og:url', window.location.origin + currentPath);
    setMeta('og:site_name', STUDIO_INFO.brandName);
    setMeta('og:type', 'website');

    // 4. Update Schema JSON-LD for LocalBusiness
    let scriptTag = document.getElementById('studio-schema-jsonld') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'studio-schema-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'HomeAndConstructionBusiness',
      name: STUDIO_INFO.brandName,
      alternateName: STUDIO_INFO.altName,
      description: STUDIO_INFO.positioning,
      url: window.location.origin,
      logo: window.location.origin + '/images/hero-living.jpg',
      image: window.location.origin + image,
      telephone: STUDIO_INFO.phone,
      priceRange: '₹₹ - ₹₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '46, Chiye Davi Nilya, 3rd Cross, Kodichikkanahalli Main Road, Near Sana Super Mart',
        addressLocality: 'Vijaya Bank Layout, Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560076',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '12.8943',
        longitude: '77.6101',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: STUDIO_INFO.rating.toString(),
        bestRating: '5',
        worstRating: '1',
        ratingCount: STUDIO_INFO.reviewCount.toString(),
        reviewCount: STUDIO_INFO.reviewCount.toString(),
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday', 'Sunday'],
          opens: '09:00',
          closes: '20:00',
        },
      ],
    };

    scriptTag.textContent = JSON.stringify(schemaData);
  }, [title, description, image, currentPath]);

  return null;
};

