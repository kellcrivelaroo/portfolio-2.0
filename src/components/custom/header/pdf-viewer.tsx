'use client'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'

import { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString()

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
}

const pdfURL = './cv/kellington_crivelaro_desenvolvedor_fullstack.pdf'

const PdfViewer = () => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth > 608) {
        setWidth(608)
      } else {
        setWidth(window.innerWidth - 24)
      }
    }
  }, [])

  return (
    <Document file={pdfURL} options={options}>
      <Page pageNumber={1} width={width} />
    </Document>
  )
}

export default PdfViewer
