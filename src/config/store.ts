import { WatchModel } from '../data/catalogData';

export const STORE_CONFIG = {
  brandName: 'MV Importados',
  whatsappNumber: '5493813451366',
  tagline: 'Relojería importada seleccionada',
} as const;

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encoded}`;
}

export function getWatchPurchaseUrl(watch: WatchModel): string {
  const message =
    `Hola ${STORE_CONFIG.brandName}! Me interesa el reloj *${watch.name}* ` +
    `(${watch.categoryName}). ¿Me confirmás precio y disponibilidad?`;
  return buildWhatsAppUrl(message);
}

export function getGeneralInquiryUrl(): string {
  return buildWhatsAppUrl(
    `Hola ${STORE_CONFIG.brandName}! Quiero consultar por los relojes disponibles en el catálogo.`
  );
}
