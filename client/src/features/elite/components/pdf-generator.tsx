import { jsPDF } from 'jspdf';
import { Button } from '@/components/shadcn/button';
import { Download } from 'lucide-react';
import { codingTips } from '../tips';

export function PDFGenerator() {
  const generatePDF = () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const colors = {
      background: '#050505',
      primary: '#90CA03',
      text: '#FFFFFF',
      secondary: '#888888',
    };

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 15;
    const contentWidth = pageWidth - 2 * margin;

    doc.setFillColor(colors.background);
    doc.rect(0, 0, pageWidth, pageHeight, 'F');

    doc.setTextColor(colors.primary);
    doc.setFontSize(24);
    doc.setFont('courier', 'bold');
    doc.text('SWS ELITE', pageWidth / 2, 25, { align: 'center' });

    doc.setTextColor(colors.secondary);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Guide des conseils d\'experts pour dominer la compétition', pageWidth / 2, 33, { align: 'center' });

    doc.setDrawColor(colors.primary);
    doc.setLineWidth(0.5);
    doc.line(margin, 40, pageWidth - margin, 40);

    let yPosition = 50;
    const lineHeight = 7;
    const sectionSpacing = 12;

    codingTips.forEach((tip, index) => {
      if (yPosition > pageHeight - 40) {
        doc.addPage();
        doc.setFillColor(colors.background);
        doc.rect(0, 0, pageWidth, pageHeight, 'F');
        yPosition = 20;
      }

      doc.setTextColor(colors.primary);
      doc.setFontSize(11);
      doc.setFont('courier', 'bold');
      doc.text(`[${tip.category}]`, margin, yPosition);

      yPosition += lineHeight;

      doc.setTextColor(colors.text);
      doc.setFontSize(10);
      doc.setFont('courier', 'normal');
      const tipLines = doc.splitTextToSize(tip.tip, contentWidth);
      doc.text(tipLines, margin, yPosition);
      yPosition += lineHeight * tipLines.length;

      doc.setTextColor(colors.secondary);
      doc.setFontSize(8);
      const detailLines = doc.splitTextToSize(tip.details, contentWidth);
      doc.text(detailLines, margin, yPosition);
      yPosition += lineHeight * detailLines.length;

      if (index < codingTips.length - 1) {
        doc.setDrawColor(colors.primary);
        doc.setLineWidth(0.1);
        doc.line(margin, yPosition + 2, pageWidth - margin, yPosition + 2);
      }

      yPosition += sectionSpacing;
    });

    const totalPages = doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      
      doc.setFillColor(colors.background);
      doc.rect(0, pageHeight - 20, pageWidth, 20, 'F');
      
      doc.setTextColor(colors.secondary);
      doc.setFontSize(8);
      doc.setFont('helvetica', 'normal');
      doc.text('© 2024 Powered by the SWS Teams | @sws.corp', pageWidth / 2, pageHeight - 10, { align: 'center' });
      
      doc.text(`Page ${i} / ${totalPages}`, pageWidth - margin, pageHeight - 10, { align: 'right' });
    }

    doc.save('sws-elite-guide.pdf');
  };

  return (
    <Button
      onClick={generatePDF}
      className="bg-[#90CA03] hover:bg-[#90CA03]/80 text-black font-mono transition-all duration-300"
      size="lg"
    >
      <Download className="mr-2 h-5 w-5" />
      Télécharger le Guide PDF
    </Button>
  );
}
