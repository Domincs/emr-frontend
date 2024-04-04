

export interface AuthResponse {
  status: number
  data: AuthData
}

export interface AuthData {
  token: Token
}

interface Token {
  id: number
  token: string
  permissions: PermissionGroupsData[]
  firstName: string
  lastName: string
  email: string
}

export interface PermissionGroupsData {
  groupName: string
  permissions: string[]
}