function Button({ href, variant = 'primary', children, ...props }) {
  return (
    <a className={`button button--${variant}`} href={href} {...props}>
      {children}
    </a>
  )
}

export default Button
