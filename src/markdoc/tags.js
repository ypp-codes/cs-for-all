import { Callout } from '@/components/Callout'
import { QuickLink, QuickLinks } from '@/components/QuickLinks'

const UnescapedHtml = ({ htmlWrapperTag = 'span', children }) => {
  const html =
    typeof children === 'string'
      ? children
      : typeof children.props.children === 'string'
        ? children.props.children
        : children.props.children.join('')

  const CustomTag = htmlWrapperTag
  return <CustomTag className="inline" dangerouslySetInnerHTML={{ __html: html }} />
}

const Anchor = (...props) => {
  return <a {...props}>{props.children}</a>
}

const tags =   {
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning'],
        errorLevel: 'critical',
      },
    },
    render: Callout,
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = '', caption }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  'quick-links': {
    render: QuickLinks,
  },
  'quick-link': {
    selfClosing: true,
    render: QuickLink,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },
  dropdown: {
    render: ({ children, summary }) => {
      <details>
        <summary>{summary}</summary>
        {children}
      </details>
    },
    attributes: {
      summary: { type: String },
      children: { type: String },
    },
  },
  html: {
    render: UnescapedHtml,
    attributes: {
      htmlWrapperTag: { type: String },
      children: { type: String },
    },
  },
  // iframe: {
  //   render: 'IFrame',
  //   attributes: {
  //     src: { type: String, required: true },
  //     width: { type: String },
  //     height: { type: String },
  //     frameborder: { type: String },
  //     allow: { type: String },
  //     allowFullScreen: { type: Boolean }
  //   }
  // }
}

export default tags
