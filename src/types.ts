export function optional<T>(obj: T): T | undefined {
  return obj
}

function constant<T extends string>(c: T): T {
  return c
}

function custom<T>(): T {
  return '' as any
}

function oneOf<T extends {}>(e: T): keyof T {
  return Object.keys(e)[0] as keyof T
}

export class types {
  static number: number = 0
  static string: string = ''
  static boolean: boolean = false
  static optional: Partial<typeof types> = types
  static constant = constant
  static oneOf = oneOf
  static custom = custom
}
