/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as SignupIndexImport } from './routes/signup/index'
import { Route as LoginIndexImport } from './routes/login/index'
import { Route as PoliciesPrivacyPolicyImport } from './routes/policies/privacy-policy'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SignupIndexRoute = SignupIndexImport.update({
  id: '/signup/',
  path: '/signup/',
  getParentRoute: () => rootRoute,
} as any)

const LoginIndexRoute = LoginIndexImport.update({
  id: '/login/',
  path: '/login/',
  getParentRoute: () => rootRoute,
} as any)

const PoliciesPrivacyPolicyRoute = PoliciesPrivacyPolicyImport.update({
  id: '/policies/privacy-policy',
  path: '/policies/privacy-policy',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/policies/privacy-policy': {
      id: '/policies/privacy-policy'
      path: '/policies/privacy-policy'
      fullPath: '/policies/privacy-policy'
      preLoaderRoute: typeof PoliciesPrivacyPolicyImport
      parentRoute: typeof rootRoute
    }
    '/login/': {
      id: '/login/'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginIndexImport
      parentRoute: typeof rootRoute
    }
    '/signup/': {
      id: '/signup/'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof SignupIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/policies/privacy-policy': typeof PoliciesPrivacyPolicyRoute
  '/login': typeof LoginIndexRoute
  '/signup': typeof SignupIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/policies/privacy-policy': typeof PoliciesPrivacyPolicyRoute
  '/login': typeof LoginIndexRoute
  '/signup': typeof SignupIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/policies/privacy-policy': typeof PoliciesPrivacyPolicyRoute
  '/login/': typeof LoginIndexRoute
  '/signup/': typeof SignupIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/policies/privacy-policy' | '/login' | '/signup'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/policies/privacy-policy' | '/login' | '/signup'
  id: '__root__' | '/' | '/policies/privacy-policy' | '/login/' | '/signup/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  PoliciesPrivacyPolicyRoute: typeof PoliciesPrivacyPolicyRoute
  LoginIndexRoute: typeof LoginIndexRoute
  SignupIndexRoute: typeof SignupIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  PoliciesPrivacyPolicyRoute: PoliciesPrivacyPolicyRoute,
  LoginIndexRoute: LoginIndexRoute,
  SignupIndexRoute: SignupIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/policies/privacy-policy",
        "/login/",
        "/signup/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/policies/privacy-policy": {
      "filePath": "policies/privacy-policy.tsx"
    },
    "/login/": {
      "filePath": "login/index.tsx"
    },
    "/signup/": {
      "filePath": "signup/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
