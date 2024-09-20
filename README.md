# next/image-optimization

<br/>

## 소개

### 1. 이미지 접근 방식 차이

- src 디렉토리 내부 파일 잡근
- public 디렉토리 내부 파일 접근
- 외부 API 파일 접근
  <br/><br/>

### 2. next/image 기능

- 포맷 최적화
- 크기 최적화
- CLS 방지(시각적 안정성)
- 빠른 페이지 로드
- 유연성(리사이징)
  <br/><br/>

### 3. 고정 vs 반응형 이미지 처리

- 고정된 이미지의 srcset 정의
- 반응형 이미지의 srcset 정의
- sizes 속성 활용
  <br/><br/>

### 4. 외부 API 이미지 처리

- remotePatterns 설정
- Loader 속성 활용
- blur 속성 활용
  <br/><br/>

### 파일 구조

```
📦public
┣ 📂fonts
┣ 📂images
┃
📦src
┣ 📂app
┃ ┣ 📂image-api
┃ ┗ 📜page.tsx
┃ ┣ 📂image-sizes
┃ ┗ 📜page.tsx
┃ ┣ 📂image-src
┃ ┗ 📜page.tsx
┃ ┣ 📂image-ImageComponent
┃ ┗ 📜page.tsx
┣ 📂assets
┃ ┣ 📂images
┃
┣ 📂components
┃ ┗ 📜ImageTile.tsx
┃ ┗ 📜Footer.tsx
┃ ┗ 📜Title.tsx
┃
┣ 📂util
┗ 📜blur.ts
```

---
