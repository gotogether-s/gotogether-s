<br/>

<div align="center"><a href="https://gotogether-s.vercel.app/" target="_blank"><img src="./public/main_logo.svg" width="300px"><p align="center">좋은 사람들과의 잊을 수 없는
여행</p></a></div>

<div align="center">

![last commit](https://img.shields.io/github/last-commit/gotogether-s/gotogether-s?color=green)
![most language](https://img.shields.io/github/languages/top/gotogether-s/gotogether-s)
[![release](https://img.shields.io/badge/release-v0.0.0-yellow)](https://github.com/gotogether-s/gotogether-s/tree/main)

</div>

<br/>

_🇰🇷 For Korean User: 스크롤다운을 하면 한국어로된 프로젝트 설명을 보실 수 있습니다._

# 🏝 고투게더 (한국어)

## 📑 목차

- [🚀 프로젝트 실행하기](#-프로젝트-실행하기)
- [🗓 프로젝트 제작기간](#-프로젝트-제작기간)
- [✨ 서비스 소개](#-서비스-소개)
  - [문제점 & 기업측 요구사항](#문제점-&-기업측-요구사항)
- [👀 데모](#-데모)
  - [목업 링크](#목업-링크)
  - [라이브 사이트 링크](#라이브-사이트-링크)
  - [주요 페이지 목업](#주요-페이지-목업)
- [🪄 기술 스택](#-기술-스택)
  - [디자인 사용 소프트웨어](#디자인-사용-소프트웨어)
  - [프론트앤드 기술 스택](#프론트앤드-기술-스택)
  - [백앤드 기술 스택](#백앤드-기술-스택)
  - [기타 사용 툴](#기타-사용-툴)
- [✂️ 업무 분배](#-업무-분배)
  - [프론트앤드 업무 분배](#프론트앤드-업무-분배)
  - [백앤드 업무 분배](#백앤드-업무-분배)
- [⚙️ 주요 기능과 로직](#주요-기능과-로직)

<br />

## 🚀 프로젝트 실행하기

1. 리포 클론하기: `git clone https://github.com/gotogether-s/gotogether-s.git`
2. 해당 디렉토리로 이동하기: `cd <YOUR_PROJECT_NAME>`.
3. 패키지 설치하기: `yarn install`
4. 프로젝트 실행하기
   - 사용자 로컬호스트: `yarn run dev`
   - 빌드후 사용: `yarn build` then `yarn run dev`
5. 프로젝트 실행시 env 인증키가 필요하신 분은 아래로 연락을 주시면 제공해드리겠습니다.
   - 변승훈: [toffg6450@naver.com](toffg6450@naver.com)
   - 조현아: [hyeonah.hello@gmail.com](hyeonah.hello@gmail.com)
     _프로젝트를 실행하고 싶으시면 [배포 사이트 링크](https://gotogether-s.vercel.app/)를, 프로젝트 코드가 필요하시면 [깃허브 링크](https://github.com/gotogether-s/gotogether-s)를 참고해주세요._

<br />

## 🗓 프로젝트 제작기간

**버전 0.1.0** : 2022년 9월 6일 - 진행중

<br />

## ✨ 서비스 소개

고투게더는 시니어층을 주요 대상으로 패키지 여행 상품을 소개해주는 여행 서비스 플랫폼입니다.

### 문제점 & 기업측 요구사항

기존 [고투게더 웹사이트](https://www.gotogether-s.com/)는 아임웹이라는 CMS(Content Management System)로 웹사이트가 만들어져 있어 한정된 기능만 사용이 가능하였습니다. 고투게더 서비스를 운영하는 회사 더샤이니에서 아래 3가지 요구사항을 반영한 새로운 웹사이트 제작을 요청하였습니다:

1. 모바일 레이아웃을 기반으로 웹 페이지 리뉴얼
2. 사용자 특성에 맞는 패키지 여행 상품 추천 기능
3. 상품 등록이 가능한 관리자 페이지 제작

<br />

## 👀 데모

### 목업 링크

🔗 [Adobe XD에서 목업 보러가기](https://xd.adobe.com/view/b526d4f5-cd7d-453b-9e76-3963a51256c9-e075/grid/)

### 라이브 사이트 링크

🔗 [Vercel로 배포한 라이브 사이트 보러가기](https://gotogether-s.vercel.app/)

### 주요 페이지 목업

| 메인 페이지                                                                                                         | 카테고리: 전체                                                                                                         | 필터: 국가별                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| ![main-page](https://user-images.githubusercontent.com/83247825/212421968-f6733216-d59d-4af5-882d-2362b1320bab.png) | ![all-products](https://user-images.githubusercontent.com/83247825/212421756-11b75ce2-1190-4a8d-9451-bc7baceb283a.png) | ![filter-country](https://user-images.githubusercontent.com/83247825/212422605-f070f559-f425-417d-9e55-120104c270c8.png) |

| 상품상세                                                                                                                      | 예약하기                                                                                                               | 결제완료                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| ![product-detail-page](https://user-images.githubusercontent.com/83247825/212436972-5ef87c31-45c1-4501-91e9-9a8190ebecf5.png) | ![booking-page](https://user-images.githubusercontent.com/83247825/212437074-bdea2eb5-dbc7-417d-b0c4-3769fde0ff00.png) | ![payment-page](https://user-images.githubusercontent.com/83247825/212437171-95c33d6c-5d02-4122-8646-8e7e4b22b8ba.png) |

| 회원가입                                                                                                              | 로그인                                                                                                               | 설문조사                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| ![signup-page](https://user-images.githubusercontent.com/83247825/212437263-ab08f565-e645-4849-b2a1-127c88e504c3.png) | ![login-page](https://user-images.githubusercontent.com/83247825/212437353-2bb3a43d-0ec8-4c80-864a-3fd0cdeb2329.png) | ![survey-page](https://user-images.githubusercontent.com/83247825/212437468-391b1b79-745b-4e85-a553-5cd51b0ae1e4.png) |

| 상품검색                                                                                                                      | 찜한 상품                                                                                                            | 예약한 상품                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| ![product-search-page](https://user-images.githubusercontent.com/83247825/212437542-93d9fa4e-9730-48b3-9c91-24ba1fe42b9d.png) | ![likes-page](https://user-images.githubusercontent.com/83247825/212437611-70682fe4-6831-411d-a9d1-9647c7656ace.png) | ![mybooking-page](https://user-images.githubusercontent.com/83247825/212437741-6c4036fc-7b87-47ce-a7a5-e143e8744164.png) |

<br />

## 🪄 기술 스택

### 디자인 사용 소프트웨어

- **와이어프레임, 목업 제작**: Adobe XD

### 프론트앤드 기술 스택

🔗  프론트엔드 리포: [gotogether-s 보러가기](https://github.com/gotogether-s/gotogether-s)

- **프레임워크** : Next.js
- **언어** : TypeScript
- **라우터** : next/router
- **상태관리 라이브러리** : Redux toolkit
- **API 요청시** : getServerSideProps, axios
- **스타일 적용** : MUI, Scss, CSS Module

### 백앤드 기술 스택

🔗  백엔드 리포: [gotogether-s-BE 보러가기](https://github.com/gotogether-s/gotogether-s-BE)

- **언어** : Java
- **프레임워크 & DB** : IntelliJ, Gradle, Spring, Spring Boot, Data JPA, Security, JWT, MySQL
- **CI/CD & INFRASTRUCTURE** : Jenkins, Docker, EC2, RDS, S3
- **기타** : POSTMAN, ERD Cloud

### 기타 사용 툴

- **이슈관리** : Github Issue
- **문서화** : Notion
- **커뮤니케이션** : Slack, Discord, Zoom

<br />

## ✂️ 업무 분배

### 프론트앤드 업무 분배

|                      변승훈                      |                                                                                                                                                                                                                                                                                  조현아                                                                                                                                                                                                                                                                                   |
| :----------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [@SeungHun6450](https://github.com/SeungHun6450) |                                                                                                                                                                                                                                                                 [@hyeonahc](https://github.com/hyeonahc)                                                                                                                                                                                                                                                                  |
|                       ...                        | **사용자 계정 기능** (회원가입, 로그인, 비밀번호 변경, 예약한 상품 조회 및 삭제, 찜한 상품 조회 및 삭제) <br/> 사용자 특성에 맞는 패키지 여행상품을 추천하기 위한 **설문조사 기능** <br/> 검색 키워드가 상품의 제목과 일치할때 상품 검색결과 나오는 **상품 검색 기능** <br/> 사용자가 검색한 키워드를 저장해 보여주는 **최근 검색 목록 기능** <br/> 다양한 사용자 정보(예약자 정보, 인원, 입금자명 등)를 입력받아 상품 예약을 처리해주는 **예약 페이지 제작** <br/> MUI를 사용해 제작한 **UI와 페이지 제작** (레이아웃, 네비게이션, 사이드바, 결제 페이지, 404 페이지 등) |

### 백앤드 업무 분배

|                    김현준                    |                이현승                 |                      김대곤                      |                   진우림                   |
| :------------------------------------------: | :-----------------------------------: | :----------------------------------------------: | :----------------------------------------: |
|   [@khjun723](https://github.com/khjun723)   | [@iheese](https://github.com/iheese)  |     [@bbyuggyu](https://github.com/bbyuggyu)     | [@jinwoorim](https://github.com/jinwoorim) |
| 상품 조회(상세, 추천, 카테고리별), 검색 기능 | 사용자, 큐레이션, 관리자 기능, AWS S3 | 서버 배포(AWS EC2, RDS, ROUTE 53), CI/CD, Dokcer |              예약 및 찜 기능               |

<br />

## ⚙️ 주요 기능과 로직

1. 사용자 설문을 통한 여행상품 추천 기능
2. SSR 구현
3. accessToken을 이용한 로그인
4. react-query 사용
5. 웹접근성 및 SEO 개선
6. 모바일 디바이스에 한정하여 Responsive Design 적용
