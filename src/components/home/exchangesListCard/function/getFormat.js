export default function getFormat(value) {
  return new Intl.NumberFormat('us-EN', { style: 'decimal', maximumFractionDigits: 4 }).format(value);
}