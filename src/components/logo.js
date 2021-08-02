import React from "react"
import { useThemeUI } from "theme-ui"

export default function Logo({ inverted, ...props }) {
  const { theme } = useThemeUI()
  const { text, secondary, background } = theme.colors
  return (
    <svg viewBox="0 0 645.12 322.56" {...props}>
      <g>
        <path
          d="m502.68 319.2c-7.12-2.07-11.57-4.58-15.95-9.03-4.45-4.51-6.24-7.76-8.15-14.86-0.85-3.13-0.91-3.89-0.91-10.9 0-7.03 0.06-7.75 0.92-10.96 3.32-12.3 11.27-19.19 26.9-23.31 11.06-2.92 22.24-4.15 41.22-4.54 0.74-0.01 4.43-0.09 11.09-0.22-0.01-12.71-0.02-19.77-0.02-21.18-0.01-21.22-0.22-26.43-1.41-34.67-1.75-12.16-5.74-17.37-13.64-17.78-6.25-0.33-12.29 2.53-14.4 6.84-0.87 1.78-0.98 2.36-0.93 4.99 0.07 3.24 0.94 7.76 1.73 9.02 0.47 0.73 0.75 0.79 4.18 0.79h3.67c0.23 0.57 0.35 0.89 0.38 0.96 1.72 4.46 2.59 14.99 1.57 18.99-1.05 4.15-2.47 6.54-5.95 9.99-4.87 4.83-9.73 7.04-17.34 7.9-4.02 0.45-10.18-0.03-14.03-1.1-7.83-2.18-13.03-7.44-15.1-15.28-1.58-6-1.19-15.18 0.9-21.2 2.72-7.83 9.19-14.46 18.2-18.66 11.55-5.38 27.94-7.86 48.86-7.4 19.52 0.43 32.76 3.23 42.28 8.93 10.12 6.05 15.7 16.62 18.17 34.38 0.53 3.85 0.63 9.14 0.82 44.46 0.24 44.04 0.15 42.23 2.37 46.33 1.64 3.01 5.4 4.7 8.45 3.78 5.36-1.6 9.15-11.25 10.55-26.83 0.23-2.51 0.54-4.63 0.69-4.73s1.16-0.12 2.24-0.05c0.13 0 0.78 0.04 1.96 0.12v1.21c0 2.33-1.42 12.8-2.3 16.97-1.49 7.07-3.93 13.61-6.4 17.22-2.7 3.91-7.53 7.49-12.63 9.35-1.57 0.58-4.86 1.47-7.31 1.98-4.1 0.85-5.11 0.92-13.02 0.93-7.85 0-8.98-0.08-13.32-0.92-2.61-0.51-5.99-1.34-7.53-1.84-9.83-3.26-16.86-9.46-19.24-16.96-0.34-1.06-0.74-2.06-0.89-2.23-0.16-0.17-0.98 1.17-1.83 2.98-6.34 13.58-15.2 18.68-32.99 19.01-3.47 0.07-7.09 0.06-8.05-0.02-3.36-0.27-10.83-1.6-13.81-2.46zm53.73-24.8c1.35-5.36 1.61-9.98 1.49-27.49 0-1.09-0.04-6.51-0.1-16.28-1.89 0.01-2.94 0.02-3.15 0.03-5.02 0.04-8.6 1.55-11.81 4.98-2.87 3.07-4.67 7.14-5.74 13.02-1.17 6.46-0.93 27.47 0.38 33.71 0.28 1.31 0.86 3.01 1.3 3.78 1.67 2.98 5.62 4.14 8.74 2.56 3.61-1.82 7.18-7.57 8.89-14.31zm-554.41 21.88v-3.14l8.49-0.1 8.49-0.09c0.05-40.64 0.08-63.21 0.09-67.73 0.05-37.25-0.03-67.85-0.18-68s-4.01-0.28-8.58-0.3c-0.55 0-3.32-0.02-8.31-0.04v-2.77-2.78l42.98 0.09 42.97 0.08c0.07 1.46 0.1 2.26 0.11 2.42 0.07 1.7-0.03 2.51-0.35 2.71-0.25 0.16-2.78 0.29-5.62 0.3h-5.17l0.09 68.01 0.09 68.01c7.88 0.06 12.25 0.1 13.13 0.1 17.12 0.14 22.14-0.37 30.33-3.09 7.48-2.49 12.61-5.8 19.23-12.41 9.09-9.05 17.22-21.16 26.93-40.09 0.24-0.46 1.41-2.74 3.51-6.83 1.66-0.06 2.58-0.1 2.77-0.1 1.6-0.06 2.86 0.04 2.99 0.24 0.21 0.35-5.1 67.35-5.41 68.22-0.12 0.35-17.31 0.44-84.37 0.44h-84.21v-3.15zm184.16 0.52v-2.63h8.16c5.87 0 8.27-0.11 8.57-0.42 0.66-0.65 0.61-105.07-0.04-105.61-0.31-0.25-3.47-0.42-9.19-0.48-0.58-0.01-3.49-0.04-8.73-0.09v-2.46-2.45h37.99 37.99l0.17 55.67 0.18 55.67 8.49 0.09 8.49 0.1v2.62 2.62h-46.04-46.04v-2.63zm106.43-0.23v-2.4h8.19c6.46 0 8.26-0.1 8.57-0.47 0.29-0.35 0.38-18.52 0.31-68.53-0.01-4.54-0.04-27.23-0.09-68.06-5.04-0.12-7.84-0.18-8.4-0.2-4.62-0.1-8.45-0.22-8.51-0.26-0.05-0.04-0.05-1.21 0-2.61 0.01-0.17 0.04-1.01 0.11-2.54 22.25-0.05 34.61-0.08 37.09-0.08 29.44-0.08 37.14 0 37.37 0.35 0.15 0.24 0.28 6.4 0.28 13.69 0 11.75 0.06 13.21 0.53 12.83 0.29-0.24 0.53-0.6 0.53-0.79 0-0.2 0.71-1.87 1.58-3.71 4.27-9.01 11.5-17.08 18.45-20.57 11.04-5.57 31.04-6.55 44.65-2.2 8.29 2.66 14.4 6.85 19.13 13.16 4.35 5.79 6.87 12.16 8.71 21.98 0.71 3.76 0.73 5.11 0.85 55.55 0.11 41.72 0.22 51.77 0.58 52.07 0.29 0.24 3.47 0.41 8.65 0.47 0.55 0.01 3.28 0.04 8.2 0.1v2.45 2.45l-43.85 0.09-43.85 0.09v-2.63-2.63h5.87c3.22 0 6.06-0.14 6.31-0.29 0.37-0.23 0.43-11.21 0.34-57.85-0.11-53.13-0.17-57.85-0.74-61.2-0.83-4.86-1.74-7.18-3.53-8.97-2.15-2.15-3.99-2.74-8.01-2.57-2.85 0.13-3.6 0.3-5.66 1.31-7.49 3.69-14.54 15.02-17.3 27.81-1.41 6.5-1.47 9.16-1.36 56.25 0 3.02 0.04 18.13 0.1 45.34l6.48 0.17 6.47 0.18v2.45 2.45c-26.27 0.05-40.87 0.08-43.79 0.09-24.08 0.05-43.89-0.02-44.02-0.15s-0.24-1.31-0.24-2.62zm-5.29-189.3c-0.59-4.47-0.21-13.12 0.75-16.86 2.38-9.27 7.35-15.38 16.08-19.78 6.92-3.48 19.19-6.33 32.37-7.52 5.08-0.46 19.64-1.05 26.2-1.05 0.32 0 1.93-0.01 4.81-0.01v-17.77c0-23.75-0.61-34.48-2.45-42.9-2.23-10.21-8.36-14.64-17.55-12.7-4.42 0.94-8.48 3.75-9.87 6.85-0.89 1.97-0.91 6.31-0.05 10.15 0.94 4.22 0.93 4.21 5.26 4.21h3.68c0.22 0.57 0.34 0.89 0.37 0.96 1.71 4.43 2.57 14.88 1.58 19.08-2.86 12.08-16.25 19.58-31.73 17.78-14.06-1.63-20.97-9.14-21.61-23.5-0.81-18.22 8.9-30.19 29.22-36.02 18.45-5.3 49.14-5.61 68.01-0.69 20.04 5.22 28.69 15.97 32.1 39.91 0.49 3.44 0.6 9.74 0.8 44.44 0.21 39.35 0.24 40.5 0.93 42.76 1.55 5.04 3.8 7.33 7.46 7.59 1.55 0.11 2.33-0.02 3.43-0.58 4.91-2.51 8.22-11.69 9.58-26.57 0.03-0.31 0.17-1.86 0.42-4.64h1.83c1.09 0 1.99 0.19 2.22 0.46 0.79 0.95-0.82 13.96-2.59 20.94-1.73 6.82-4.17 12.37-6.94 15.78-4.27 5.23-11.78 8.8-21.4 10.15-4.78 0.67-17.35 0.57-22.15-0.18-14.76-2.29-24.91-9.1-28.22-18.92-0.42-1.25-0.87-2.38-1-2.51-0.12-0.13-1 1.41-1.95 3.43-5.67 12.02-13.27 17.11-27.56 18.45-4.4 0.42-9.63 0.4-14.7-0.03-22.52-1.93-34.84-12.07-37.33-30.71zm78.64 3.71c1.4-5.58 1.62-9.65 1.51-27.4-0.01-1.09-0.05-6.58-0.11-16.45-1.03-0.07-1.61-0.1-1.72-0.11-4.68-0.3-9.55 1.51-12.8 4.77-3.12 3.12-5.05 7.36-6.16 13.54-1.18 6.62-0.96 27.31 0.37 33.57 1.2 5.66 4.47 8.12 9.1 6.83 3.55-0.99 8.05-7.75 9.81-14.75zm102.56-4.97c-2.11-8.74-2.02-6.31-2.23-61.99-0.02-3.41-0.08-20.45-0.2-51.12-5.03-0.05-7.83-0.08-8.39-0.09-6.17-0.07-8.45-0.21-8.66-0.52-0.43-0.68-0.32-4.28 0.14-4.74 0.32-0.32 9.03-0.42 37.08-0.42 20.17 0 36.91 0.09 37.22 0.21 0.5 0.19 0.55 5.45 0.55 55.93 0 33.1 0.15 57.94 0.35 61.19 0.65 10.08 1.78 14.37 4.54 17.13 3.37 3.37 9.53 3.99 14.54 1.47 2.37-1.2 6.73-5.65 8.56-8.74 3.15-5.35 4.99-11.93 5.63-20.2 0.26-3.33 0.35-20.65 0.27-53.08 0-3.2-0.04-19.25-0.1-48.14l-7-0.17-7.01-0.18c-0.06-1.45-0.09-2.25-0.1-2.41-0.07-1.7 0.03-2.51 0.35-2.71 0.25-0.16 16.31-0.29 35.69-0.3 29.14 0 35.29 0.08 35.62 0.47 0.28 0.35 0.41 19.66 0.48 71.34 0 4.72 0.03 28.34 0.09 70.86l13.04 0.09 13.04 0.09v2.71 2.71c-23.89-0.06-37.16-0.09-39.81-0.09-21.9-0.05-39.93-0.21-40.08-0.36s-0.91-4.52-1.68-9.71c-1.69-11.32-1.7-11.38-2.22-11.36-0.23 0.01-1.02 1.28-1.77 2.82-3.84 7.94-10.84 14.84-18.1 17.83-6.33 2.62-11.76 3.52-22.03 3.66-4.33 0.06-8.51 0.05-9.28-0.04-21.14-2.29-33.9-12.93-38.53-32.14zm-466.5 26.5v-2.71c4.91 0.06 7.63 0.09 8.18 0.1 6.64 0.08 8.25 0.01 8.57-0.39 0.31-0.36 0.39-17.62 0.32-68.9-0.01-4.56-0.04-27.36-0.09-68.41l-8.49-0.09-8.49-0.09v-2.79-2.79c22.14-0.01 34.44-0.01 36.9-0.01 20.3 0 37.15 0.09 37.46 0.21 0.51 0.19 0.56 1.76 0.56 15.06 0 8.16 0.13 14.84 0.29 14.84s1.04-1.73 1.95-3.84c3.14-7.22 8.44-14.06 13.94-17.98 6.48-4.62 14.21-7.16 24.34-7.99 11.1-0.9 21.8 1.22 29.57 5.86 3.37 2.02 8.26 6.66 10.44 9.91 2.72 4.07 5.19 9.67 6.65 15.09 0.44 1.64 0.91 1.78 1.47 0.44 3.65-8.78 7.74-14.59 13.81-19.61 6.85-5.67 14.8-9.17 24.98-11 5.47-0.98 15.65-1.06 21.19-0.15 10.78 1.75 19.16 6.19 24.71 13.08 4.06 5.05 6.59 10.32 8.4 17.49 2.19 8.64 2.18 8.47 2.33 46.92 0.07 20.16 0 35.1-0.18 35.1-0.17 0-0.69-0.4-1.15-0.89-0.46-0.5-1.35-1.21-1.96-1.59-0.8-0.5-1.29-1.2-1.7-2.43-0.7-2.11-1.05-2.36-2.03-1.48-1.31 1.17-1.56 1.19-3.41 0.25-0.99-0.5-2.03-0.82-2.3-0.71-0.31 0.11-1.98-1.11-4.3-3.15-3.46-3.03-3.87-3.52-4.59-5.48-1.07-2.94-3.14-5.1-5.44-5.68-0.11-0.03-0.69-0.18-1.73-0.44-0.13-1.27-0.19-1.97-0.21-2.11-0.21-2.21-1.15-3.97-2.49-4.68-2.87-1.54-4.88-1.04-7.7 1.9-3.16 3.28-3.92 5.1-4.45 10.64-0.27 2.88-0.42 3.3-2.32 6.57-1.38 2.38-2.35 4.62-3.04 7-1.1 3.82-1.96 5.76-2.75 6.18-0.27 0.15-1.1 0.36-1.83 0.48-0.83 0.13-1.86 0.68-2.7 1.44-0.09 0.08-0.54 0.49-1.36 1.23-0.08-26.74-0.13-41.6-0.14-44.57-0.1-31.58-0.26-45.5-0.56-47.73-0.56-4.24-1.6-8.33-2.57-10.09-2.26-4.1-8.41-4.22-16.37-0.32-2.8 1.37-3.84 2.13-6.51 4.79-2.7 2.69-3.42 3.68-4.8 6.5-3.02 6.18-4.73 12.84-5.49 21.35-0.27 3.03-0.36 18.03-0.29 48.67 0.01 2.95 0.04 17.71 0.11 44.29l6.47 0.17 6.48 0.18 0.1 2.54 0.11 2.53h-40.63-40.63v-2.61-2.62l4.99-0.1 4.99-0.09c0.06-31.62 0.1-49.18 0.1-52.69 0.07-35.42-0.02-54.54-0.27-58.32-0.43-6.31-1.33-11.31-2.47-13.65-2.58-5.35-10.02-5.04-15.75 0.64-4.97 4.92-9.34 13.6-11.41 22.66-1.86 8.13-1.89 8.89-1.89 56.8v44.37c0.48 0.11 0.74 0.17 0.79 0.18 0.44 0.1 2.92 0.23 5.52 0.27 0.31 0.01 1.89 0.04 4.72 0.09v2.45 2.45l-42.97 0.09-42.98 0.09v-2.72z"
          id="letras"
          opacity="1"
          fill={inverted ? background : text}
          fillOpacity="1"
        ></path>
        <path
          d="m214.44 193.94c-0.86-0.66-2.36-1.73-3.32-2.38-2.49-1.67-3.64-2.8-4.44-4.35-1.17-2.27-7.29-16.99-7.29-17.53 0-0.27 0.47-0.84 1.05-1.25 1.28-0.91 1.32-1.57 0.35-6.65-0.39-2.02-0.7-4.75-0.7-6.06 0-2.43 0.91-6.9 1.41-6.9 0.16 0 1.59 1.78 3.19 3.94 3.41 4.61 3.79 4.42 2.1-1.05-1.59-5.18-1.6-5.39-0.46-9.89 1.26-4.96 2.42-7.56 5.57-12.47 3.23-5.03 3.82-6.23 4.77-9.83 0.45-1.68 0.97-3.09 1.16-3.16 0.19-0.06 1.37 2.2 2.61 5.03 1.23 2.83 2.42 5.21 2.63 5.28s1.31-1.5 2.43-3.48c3.09-5.44 2.92-7.16-1.29-12.96-1.69-2.32-1.71-2.4-1.71-4.97 0-4.13 0.51-5.87 2.33-7.89 2.14-2.38 2.57-2.32 2.57 0.4 0 3.68 0.6 4.48 8.18 10.89 3.68 3.12 7.34 6.31 8.13 7.09 1.66 1.67 2.13 3.2 3.28 10.81 0.41 2.68 0.82 5 0.93 5.17 0.38 0.61 0.83-0.15 1.55-2.61 1.39-4.82 1.8-5.88 2.67-6.92 0.49-0.57 1.02-0.95 1.19-0.85 0.17 0.11 0.64 1.33 1.06 2.72 0.92 3.11 1.64 4.55 4.04 8.05 1.03 1.51 1.88 2.89 1.88 3.07s0.79 1.93 1.75 3.9c1.6 3.27 1.75 3.78 1.74 6.04 0 1.59-0.37 3.9-1.05 6.49-1.06 4.09-1.24 5.26-0.79 5.26 0.14 0 1.07-0.81 2.07-1.8 1-0.98 1.98-1.68 2.2-1.55 0.25 0.16 0.38 2.19 0.38 5.97 0 5.22-0.09 6.08-1.03 9.69-1.54 5.87-3.77 12.48-4.82 14.28-2.67 4.56-10.69 10.34-16.52 11.91-4.43 1.19-14.24 1.66-22.44 1.06-3.69-0.27-5.02-0.72-7.36-2.5zm-8.82-20.16c-1.72-1.83-1.69-0.52 0.08 4.08 0.6 1.55 1.22 2.82 1.37 2.82s0.05-1.37-0.21-3.05c-0.35-2.16-0.71-3.29-1.24-3.85zm55.18-24.8c-0.54 0.74-0.68 3-0.18 3 0.17 0 0.49-0.73 0.71-1.62 0.46-1.81 0.23-2.41-0.53-1.38zm-23.85-37.13c-0.15 0.15 0.1 0.58 0.56 0.95 1.09 0.88 1.45 0.52 0.47-0.46-0.42-0.42-0.88-0.64-1.03-0.49zm-27.89 17.02c0.71 0 0.59 0.89-0.31 2.27-1.01 1.57-1.45 1.56-1.2-0.03 0.23-1.41 0.79-2.24 1.51-2.24zm47.74-5.98c0.29 0.72 0.31 1.22 0.06 1.66-0.32 0.58-0.39 0.55-0.73-0.34-0.79-2.07-0.16-3.31 0.67-1.32zm-24.48-19.85c0.78-0.15 2.43 1.24 2.43 2.05 0 0.86-0.25 0.83-1.75-0.23-1.3-0.92-1.58-1.65-0.68-1.82z"
          id="fuego"
          opacity="1"
          fill={inverted ? background : secondary}
          fillOpacity="1"
        ></path>
      </g>
    </svg>
  )
}
