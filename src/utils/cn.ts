type ClassName = string | boolean | undefined

export function cn(...classes: ClassName[]) {
  return classes.filter(Boolean).join(" ")
}
