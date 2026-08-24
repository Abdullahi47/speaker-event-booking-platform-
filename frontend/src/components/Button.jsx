const variants = {
  primary: 'btn-primary',
  accent: 'btn-accent',
  dark: 'btn-dark',
  ghost: 'btn-ghost',
}

function Button({ as: Component = 'button', variant = 'dark', className = '', ...props }) {
  return <Component className={`${variants[variant] ?? variants.dark} ${className}`.trim()} {...props} />
}

export default Button
