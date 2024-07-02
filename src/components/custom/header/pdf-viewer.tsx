'use client'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

import Underline from '../underline'

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
  const [page, setPage] = useState(1)

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
    <Document file={pdfURL} options={options} className="relative">
      <Page pageNumber={page} width={width} />
      <div
        className="absolute bottom-1 left-1/2 z-50 w-fit -translate-x-1/2 items-center justify-center 
        overflow-hidden rounded-full border border-foreground/30 font-semibold dark:bg-slate-900/95
        dark:brightness-110 lg:bottom-2"
      >
        <div className="relative flex ">
          <button
            className="px-3 py-1 transition-all hover:brightness-105 disabled:text-slate-400 dark:text-slate-100  hover:dark:bg-slate-900/50 lg:px-4"
            onClick={() => setPage(1)}
            disabled={page === 1}
          >
            <ArrowLeft className="size-4 lg:size-5" />
          </button>
          <button
            className="px-3 py-1 transition-all hover:brightness-105 disabled:text-slate-400 dark:text-slate-100 hover:dark:bg-slate-900/80 lg:px-4"
            onClick={() => setPage(2)}
            disabled={page === 2}
          >
            <ArrowRight className="size-4 lg:size-5" />
          </button>

          <Underline className="translate-y-px" />
        </div>
      </div>
    </Document>
  )
}

export default PdfViewer
