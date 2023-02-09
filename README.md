<br/>

<div align="center"><a href="https://gotogether-s.vercel.app/" target="_blank"><img src="./public/main_logo.svg" width="300px"><p align="center">좋은 사람들과의 잊을 수 없는 여행</p></a></div>

<div align="center">

![last commit](https://img.shields.io/github/last-commit/gotogether-s/gotogether-s?color=green)
![most language](https://img.shields.io/github/languages/top/gotogether-s/gotogether-s)
[![release](https://img.shields.io/badge/release-v0.1.0-yellow)](https://github.com/gotogether-s/gotogether-s/tree/main)

</div>

<br/>

_🇰🇷 For Korean User: 한국어로 된 프로젝트 설명은 [여기](#고투게더-한국어)를 클릭해주세요._

# 🏝 Go Together (English)

## 📑 Table of Contents

- [🚀 Quick Start](#-quick-start)
- [🗓 Project Duration](#-project-duration)
- [✨ Project Summary](#-project-summary)
  - [Problems & Company's Requirements](#problems--companys-requirements)
- [👀 Demo](#demo)
  - [Mockup](#mockup)
  - [Live Website](#live-website)
  - [Short Video Demo](#short-video-demo)
- [🪄 Tech Stack & Tools](#-tech-stack--tools)
  - [Design Tools](#design-tools)
  - [Front-End Tech Stack](#front-end-tech-stack)
  - [Back-End Tech Stack](#back-end-tech-stack)
  - [Other Tools](#other-tools)
- [🧑‍🤝‍🧑 Roles & Responsibilities](#-roles--responsibilities)
  - [Front-End Roles & Responsibilities](#front-end-roles--responsibilities)
  - [Back-End Roles & Responsibilities](#back-end-roles--responsibilities)
- [⚙️ Key Features and Logic](#%EF%B8%8Fkey-features-and-logic)

<br />

## 🚀 Quick Start

1. Clone this repo: `git clone https://github.com/gotogether-s/gotogether-s.git`
2. Move to the directory: `cd <YOUR_PROJECT_NAME>`.
3. Install packages: `yarn install`
4. Start project
   - Localhost: `yarn run dev`
   - After build: `yarn build` then `yarn run dev`
5. Please contact [hyeonah.hello@gmail.com](hyeonah.hello@gmail.com) if you need an env key to run the project
6. Reference
   - Visit the live website: [https://gotogether-s.vercel.app/](https://gotogether-s.vercel.app/)
   - View project code with GitHub: [https://github.com/gotogether-s/gotogether-s](https://github.com/gotogether-s/gotogether-s)

<br />

## 🗓 Project Duration

Sep 6, 2022 - Present

### **Timeline**

- Version 0.1.0 released: Feb 8, 2023

<br />

## ✨ Project Summary

Go Together is a travel service platform where people can book vacation packages. The service targets mainly seniors who have more challenge planning travel.

- Client: Go Together Travel Agency (The Shiny)
- Service: Website Design & Development
- Team Members: 8

### Problems & Company's Requirements

[The existing website of Go Together](https://www.gotogether-s.com/) was created with a CMS (Content Management System) called I'm Web, allowing limited functions. The Shiny, which operates the Go Together service, requested the creation of a new website that reflects the following three requirements:

1. Web page renewal based on the mobile layout ✅
2. Vacation packages recommendation function tailored to users' interest ✅
3. Create an admin page that allows product registration [(Click here to see Go Together admin Github repo)](https://github.com/gotogether-s/gotogether-s-admin)

<br />

## 👀 Demo

### Mockup

🔗 [View mockup with Adobe XD](https://xd.adobe.com/view/b526d4f5-cd7d-453b-9e76-3963a51256c9-e075/grid/)

### Live Website

🔗 [Visit the live website on Vercel](https://gotogether-s.vercel.app/)

### Short Video Demo

| Homepage                                                                                                             | Category All                                                                                                             | Filter by Age Group                                                                                                             |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| ![1-homepage](https://user-images.githubusercontent.com/83247825/217357175-ed92884b-a31b-4664-aaf7-aaab6b41fc01.gif) | ![2-category-all](https://user-images.githubusercontent.com/83247825/217357265-6532ae0c-621a-42cc-9fa9-b8fbe7b52378.gif) | ![3-filter-by-age-group](https://user-images.githubusercontent.com/83247825/217357748-b755c7c5-9c4a-4ec9-b7d2-3c322a2c6cfd.gif) |

<br/>

| Sign Up                                                                                                            | Sign in & Sign Out                                                                                                         | Survey                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| ![4-signup](https://user-images.githubusercontent.com/83247825/217361924-18186857-5bff-4389-bd7a-eb94f81f0788.gif) | ![5-signin-signout](https://user-images.githubusercontent.com/83247825/217364805-ce9018c3-e62c-4e37-ac6d-bc371cffda1b.gif) | ![6-survey](https://user-images.githubusercontent.com/83247825/217383468-bc947359-51f5-4a15-8f4a-68ab3105218e.gif) |

<br/>

| Product Search                                                                                                             | Product Detail                                                                                                             | Booking & Payment                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| ![7-product-search](https://user-images.githubusercontent.com/83247825/217384748-19ab1627-8b8d-4074-b302-2aa54dd719b2.gif) | ![8-product-detail](https://user-images.githubusercontent.com/83247825/217385443-8de1d27e-2018-42e5-b1a8-38465945cdb6.gif) | ![9-booking-payment](https://user-images.githubusercontent.com/83247825/217410076-d1961926-cebf-410d-86b2-bbba17d95a00.gif) |

<br/>

| My booking                                                                                                              | Saved Products                                                                                                              | Language Setting                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ![10-my-booking](https://user-images.githubusercontent.com/83247825/217410927-19b4f62e-ec49-4119-af8e-85bd3e8e7914.gif) | ![11-saved-products](https://user-images.githubusercontent.com/83247825/217411403-7271cff4-07b1-4d5d-ba53-56d12079bfad.gif) | ![12-language-setting](https://user-images.githubusercontent.com/83247825/217411902-210f9d0f-cd6c-4fe5-abb3-2ce16b0ce66a.gif) |

<br />

## 🪄 Tech Stack & Tools

### Design Tools

- **For wireframe and mockup creation**: Adobe XD

### Front-End Tech Stack

🔗 GitHub Repo: [https://github.com/gotogether-s/gotogether-s](https://github.com/gotogether-s/gotogether-s)

- **Framework**: Next.js
- **Programming Language**: TypeScript
- **Router**: next/router
- **State Management**: Redux toolkit
- **API Request**: getServerSideProps, axios
- **Design**: MUI, Scss, CSS Module

### Back-End Tech Stack

🔗 GitHub Repo: [https://github.com/gotogether-s/gotogether-s-BE](https://github.com/gotogether-s/gotogether-s-BE)

🔗 ERD Cloud: [https://www.erdcloud.com/d/bdPHHqeiiKZ6GC9rP](https://www.erdcloud.com/d/bdPHHqeiiKZ6GC9rP)

- **Programming Language**: Java
- **Framework & DB**: IntelliJ, Gradle, Spring, Spring Boot, Data JPA, Security, JWT, MySQL
- **CI/CD & Infrastructure**: Jenkins, Docker, EC2, RDS, S3
- **Other**: POSTMAN, ERD Cloud

### Other Tools

- **Issue**: Github Issue
- **Documentation**: Notion
- **Communication**: Slack, Discord, Zoom

<br />

## 🧑‍🤝‍🧑 Roles & Responsibilities

### Front-End Roles & Responsibilities

| Seunghun                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Hyeonah                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@SeungHun6450](https://github.com/SeungHun6450)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | [@hyeonahc](https://github.com/hyeonahc)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Main Page (product display)**<br/>• Create banner slider (Go to the survey page or product detail page by clicking banner)<br/>• Create a category menu that shows product lists by destination, age group, companion type, and interest<br/>• Bundle the related products to show a list of relevant vacation packages upon keyword selection<br/><br/>**Product List Page (SSR, display, filter)**<br/>• Show product list for the selected category (destination, age group, companion type, interest)<br/>• Show product lists when category details are selected with a filter<br/>• Move to the detail page when clicking the product list<br/><br/>**Product Detail Page (SSR, Redux, display)**<br/>• Create a page for displaying detailed product information (hotel, flight, and travel details)<br/>• Provides booking functions upon logging in (making a reservation is only available with login)<br/>• Save the product list to the wishlist by clicking the save button<br/>• When the user clicks the book button, save the product data in Redux before moving to the book page<br/> | **User Function**<br/>• Create user-related functions such as sign up, log in, change password, booked product inquiry and deletion, and wishlist product inquiry and deletion<br/><br/>**Travel Preferences Survey**<br/>• Create a survey page that recommends vacation packages suitable for the user's interest<br/>• Homepage shows a list of recommended vacation packages that match to user's interest when a user completes a travel preferences survey<br/>• Survey is available for both login and non-login users, surveys are saved permanently for login user and 30 minutes for non-login users, and shows a list of recommended vacation packages on the homepage<br/><br/>**Product Search / Recent Search History**<br/>• Show product search results when the search keyword matches the product title<br/>• Save search history in chronological order<br/><br/>**Booking Page**<br/>• Receive various user information (booker, the number of travellers, depositor's name, etc.) to process a reservation before moving to the payment page<br/>• Viewing booking details and cancelling reservations are handled on my booking page<br/><br/>**Website Language Settings (provided in Korean and English)**<br/>• Depending on the language setting on the user's web browser, the language of the Go Together website is provided either in Korean or English<br/>• Enable to switch the language with the language setting button at the top of the header<br/><br/>**Others**<br/>• Sidebar shows the number of booked and saved products in real-time<br/>• Customized title of each web page to improve SEO<br/>• Create Layout, navigation, 404 page |

### Back-End Roles & Responsibilities

|                            Hyunjun                            |              Hyunseong               |                          Daegon                           |                   Woorim                   |
| :-----------------------------------------------------------: | :----------------------------------: | :-------------------------------------------------------: | :----------------------------------------: |
|           [@khjun723](https://github.com/khjun723)            | [@iheese](https://github.com/iheese) |         [@bbyuggyu](https://github.com/bbyuggyu)          | [@jinwoorim](https://github.com/jinwoorim) |
| products (detailed, recommended, categorized), search feature |     user, survey, admin, AWS S3      | server deployment (AWS EC2, RDS, ROUTE 53), CI/CD, Dokcer |      booking & saved products feature      |

<br />

## ⚙️ Key Features and Logic

1. **Vacation packages recommendation function through a user survey**
   - The homepage shows a list of recommended vacation packages that match to user's interest when a user completes a travel preferences survey
   - Travel Preferences Survey is available for both login and non-login users, surveys are saved permanently for login user and 30 minutes for non-login users, and shows a list of recommended vacation packages on the homepage
2. **Implement Server-Side Rendering (SSR)**
   - Improve the rendering speed of product detail and product list pages with large amounts of data by implementing server-side rendering
3. **Token-based authentication logins using JWT**
   - Issue access tokens to login users
   - Validate client requests to the server by sending tokens along with the header
4. **Central state management using the Redux toolkit**
   - Easy to manage the state centrally because of no boilerplate code and the inclusion of immer feature in Redux toolkit
5. **Data Patching with RTK Query**
   - Use RTK Query to prepare a template for API requests
6. **Improve web accessibility and SEO**
   - Use semantic tags
   - Use rem
   - Put alt tags in images
   - Customized titles by a web page
   - Use server-side rendering
7. **Apply responsive design**
   - Implement responsive design for a mobile device size (320px to 900px)

<br />
<br />
<hr />
<br />
<br />

# 🏝 고투게더 (한국어)

## 📑 목차

- [🚀 프로젝트 실행하기](#-프로젝트-실행하기)
- [🗓 프로젝트 제작기간](#-프로젝트-제작기간)
- [✨ 서비스 소개](#-서비스-소개)
  - [문제점 & 기업측 요구사항](#문제점--기업측-요구사항)
- [👀 데모](#데모)
  - [목업 링크](#목업-링크)
  - [라이브 사이트 링크](#라이브-사이트-링크)
  - [주요 페이지 목업](#주요-페이지-목업)
- [🪄 기술 스택](#-기술-스택)
  - [디자인 사용 소프트웨어](#디자인-사용-소프트웨어)
  - [프론트앤드 기술 스택](#프론트앤드-기술-스택)
  - [백앤드 기술 스택](#백앤드-기술-스택)
  - [기타 사용 툴](#기타-사용-툴)
- [🧑‍🤝‍🧑 업무 분배](#-업무-분배)
  - [프론트앤드 업무 분배](#프론트앤드-업무-분배)
  - [백앤드 업무 분배](#백앤드-업무-분배)
- [⚙️ 주요 기능과 로직](#%EF%B8%8F주요-기능과-로직)

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
6. 참고
   - 프로젝트 실행: [배포 사이트 링크](https://gotogether-s.vercel.app/)
   - 프로젝트 코드: [깃허브 링크](https://github.com/gotogether-s/gotogether-s)

<br />

## 🗓 프로젝트 제작기간

2022년 9월 6일 - 진행중

### **타임라인**

- 버전 0.1.0: 2023년 2월 8일

<br />

## ✨ 서비스 소개

고투게더는 시니어층을 주요 대상으로 패키지 여행 상품을 예약할 수 있는 여행 서비스 플랫폼입니다.

- 클라이언트: 고투게더 (더 샤이니)
- 서비스: 웹 디자인 및 개발
- 프로젝트 참여 인원: 8명

### 문제점 & 기업측 요구사항

기존 [고투게더 웹사이트](https://www.gotogether-s.com/)는 아임웹이라는 CMS(Content Management System)로 웹사이트가 만들어져 있어 한정된 기능만 사용이 가능하였습니다. 고투게더 서비스를 운영하는 회사 더샤이니에서 아래 3가지 요구사항을 반영한 새로운 웹사이트 제작을 요청하였습니다:

1. 모바일 레이아웃을 기반으로 웹 페이지 리뉴얼
2. 사용자 특성에 맞는 패키지 여행 상품 추천 기능
3. 상품 등록이 가능한 관리자 페이지 제작 [(관리자 페이지 깃허브 리포 보러가기)](https://github.com/gotogether-s/gotogether-s-admin)

<br />

## 👀 데모

### 목업 링크

🔗 [Adobe XD에서 목업 보러가기](https://xd.adobe.com/view/b526d4f5-cd7d-453b-9e76-3963a51256c9-e075/grid/)

### 라이브 사이트 링크

🔗 [Vercel로 배포한 라이브 사이트 보러가기](https://gotogether-s.vercel.app/)

### 주요 페이지 목업

| 메인 페이지                                                                                                    | 카테고리: 전체                                                                                                          | 연령대별 여행 추천                                                                                                         |
| -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| ![메인](https://user-images.githubusercontent.com/65530775/217529992-ca91fdad-eff9-4f2d-a402-16443619ea83.gif) | ![모든 카테고리](https://user-images.githubusercontent.com/65530775/217530037-56b88e8e-6cc8-403d-a86b-ac16d013d7d8.gif) | ![연령대별여행추천](https://user-images.githubusercontent.com/65530775/217530105-683a0d88-1038-42e0-b54b-443d3fedb4c7.gif) |

<br/>

| 회원가입                                                                                                           | 로그인 & 로그아웃                                                                                                         | 설문조사                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| ![회원가입](https://user-images.githubusercontent.com/65530775/217530130-088e0326-96eb-42b9-a660-044c739ecea1.gif) | ![로그인 로그아웃](https://user-images.githubusercontent.com/65530775/217530221-080b547c-14a9-40fd-969f-dc5377bd832c.gif) | ![설문조사](https://user-images.githubusercontent.com/65530775/217530240-ea83e06d-21d6-4e1d-843b-44d796fdab9b.gif) |

<br/>

| 상품 검색                                                                                                      | 상품 상세                                                                                                          | 예약 및 결제                                                                                                         |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| ![검색](https://user-images.githubusercontent.com/65530775/217530444-98a08fc7-cba7-430e-b9b6-ac3c5d114f4a.gif) | ![제품상세](https://user-images.githubusercontent.com/65530775/217531615-cc850e3d-762e-4e9b-bf9b-54b36c02d91e.gif) | ![예약, 결제](https://user-images.githubusercontent.com/65530775/217530656-47973cdd-f9e2-431b-9e76-e5b3df090bfd.gif) |

<br/>

| 예약                                                                                                             | 찜하기 & 찜한 상품                                                                                               | 언어 바꾸기                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| ![내예약](https://user-images.githubusercontent.com/65530775/217530690-d75caad8-c561-4d10-bf6d-3311a957d6f1.gif) | ![찜하기](https://user-images.githubusercontent.com/65530775/217530711-e14342cd-be2f-49a6-8cee-a6ab1bf39da6.gif) | ![언어바꾸기](https://user-images.githubusercontent.com/65530775/217530725-237eb7ee-7bf4-450a-a6a8-e988602837e3.gif) |

<br />

## 🪄 기술 스택

### 디자인 사용 소프트웨어

- **와이어프레임, 목업 제작**: Adobe XD

### 프론트앤드 기술 스택

🔗 프론트엔드 리포: [gotogether-s 보러가기](https://github.com/gotogether-s/gotogether-s)

- **프레임워크**: Next.js
- **언어**: TypeScript
- **라우터**: next/router
- **상태관리 라이브러리**: Redux toolkit
- **API 요청**: getServerSideProps, axios
- **스타일 적용**: MUI, Scss, CSS Module

### 백앤드 기술 스택

🔗 백엔드 리포: [gotogether-s-BE 보러가기](https://github.com/gotogether-s/gotogether-s-BE)

🔗 ERD Cloud 링크: [ERD Cloud 보러가기](https://www.erdcloud.com/d/bdPHHqeiiKZ6GC9rP)

- **언어**: Java
- **프레임워크 & DB**: IntelliJ, Gradle, Spring, Spring Boot, Data JPA, Security, JWT, MySQL
- **CI/CD & INFRASTRUCTURE**: Jenkins, Docker, EC2, RDS, S3
- **기타**: POSTMAN, ERD Cloud

### 기타 사용 툴

- **이슈관리**: Github Issue
- **문서화**: Notion
- **커뮤니케이션**: Slack, Discord, Zoom

<br />

## 🧑‍🤝‍🧑 업무 분배

### 프론트앤드 업무 분배

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                        변승훈                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    조현아                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                   [@SeungHun6450](https://github.com/SeungHun6450)                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   [@hyeonahc](https://github.com/hyeonahc)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **메인 페이지 (상품 검색, 조회)**<br/>설문조사, 여행상품 이미지가 있는 배너 슬라이더 (배너 클릭시 설문조사 페이지, 해당 상품의 상세페이지로 이동) <br/>전체 상품, 국가별, 연령대별, 동행자 유형별, 테마별로 상품 리스트를 출력해주는 카테고리 메뉴<br/>관련있는 여행상품을 묶어 출력하고 키워드 선택시 해당하는 상품 리스트 출력<br/><br/>**상품 리스트 페이지 (SSR, 상품 검색, 조회)**<br/>각 카테고리(국가, 연령대, 동행자 유형, 테마)에 맞는 상품 리스트 출력<br/>필터로 카테고리 세부사항을 선택한 후 상품 출력<br/>상품 클릭시 상세 페이지로 이동<br/><br/>**상세 페이지 (SSR, Redux, 상품 조회)**<br/>상품에 대한 상세정보(지역, 항공, 여행상세 소개)를 조회할 수 있는 페이지<br/>로그인시 찜하기, 예약하기 기능 제공 (비로그인시 찜하기, 예약하기 기능 이용 불가)<br/>사용자가 상품의 찜하기 버튼을 눌렀을때 해당 상품이 찜 목록에 추가<br/>사용자가 예약하기 버튼 클릭했을때 Redux를 사용하여 필요한 정보를 저장한 후 예약 페이지로 이동<br/> | **사용자 계정**<br/>회원가입, 로그인, 비밀번호 변경, 예약한 상품 조회 및 삭제, 찜한 상품 조회 및 삭제 등 사용자 계정과 연동된 기능<br/><br/>**설문조사 (여행지 추천 받기)**<br/>사용자 특성에 맞는 패키지 여행상품을 추천하기 위한 기능<br/>사용자가 설문조사를 완료하면 홈페이지에 있는 *사용자 이름*님을 위한 추천 상품 섹션에 고투게더에서 해당 사용자에게 추천하는 여행상품 목록이 출력됨<br/>회원과 비회원 모두 이용 가능하며 회원의 설문은 영구적으로, 비회원 사용자의 설문은 30분간 저장되어 추천하는 여행상품 목록이 출력됨<br/><br/>**상품 검색 기능/최근 검색 기록**<br/>검색 키워드가 상품의 제목과 일치할때 상품 검색결과 출력됨<br/>사용자가 검색한 키워드를 저장해 검색시 검색한 내역을 시간순대로 알 수 있음<br/><br/>**예약 페이지**<br/>다양한 사용자 정보(예약자 정보, 인원, 입금자명 등)를 입력받아 상품 예약을 처리하고 결제페이지로 이동함<br/>예약 상세 정보 열람과 예약 취소는 예약한 상품 메뉴에서 처리<br/><br/>**웹사이트 언어설정 (한국어, 영어 제공)**<br/>사용자가 웹브라우저에 설정한 언어에 따라 웹사이트의 언어가 한국어 또는 영어로 제공<br/>상단에 위치한 언어설정 버튼으로 한국어 또는 영어로 언어를 자유롭게 변경이 가능하다<br/><br/>**기타**<br/>실시간 예약한 상품과 찜한 상품의 수를 알 수 있는 사이드바<br/>SEO 향상을 위해 각 웹페이지의 제목 커스텀 작업<br/>레이아웃, 네비게이션, 404 페이지 제작 |

### 백앤드 업무 분배

|                    김현준                    |                이현승                 |                      김대곤                      |                   진우림                   |
| :------------------------------------------: | :-----------------------------------: | :----------------------------------------------: | :----------------------------------------: |
|   [@khjun723](https://github.com/khjun723)   | [@iheese](https://github.com/iheese)  |     [@bbyuggyu](https://github.com/bbyuggyu)     | [@jinwoorim](https://github.com/jinwoorim) |
| 상품 조회(상세, 추천, 카테고리별), 검색 기능 | 사용자, 큐레이션, 관리자 기능, AWS S3 | 서버 배포(AWS EC2, RDS, ROUTE 53), CI/CD, Dokcer |              예약 및 찜 기능               |

<br />

## ⚙️ 주요 기능과 로직

1. **사용자 설문을 통한 여행상품 추천 기능**
   - 사용자 특성에 맞는 패키지 여행상품을 추천하기 위한 설문 기능
   - 사용자가 설문조사를 완료하면 홈페이지에 있는 *사용자 이름*님을 위한 추천 상품 섹션에 고투게더에서 해당 사용자에게 추천하는 여행상품 목록이 출력
   - 회원과 비회원 모두 이용 가능하며 회원의 설문은 영구적으로, 비회원 사용자의 설문은 30분간 저장되어 추천하는 여행상품 목록이 출력
2. **서버 사이드 렌더링(SSR) 구현**
   - 상품 상세페이지, 상품 리스트 페이지를 서버 사이드 렌더링으로 구현하여 용량이 큰 데이터를 불러오는 페이지의 렌더링 속도를 향상
3. **JWT 사용한 토큰 기반 인증 로그인**
   - 로그인한 사용자들에게 액세스 토큰을 발급하고, 클라이언트가 서버에 요청을 할 때마다 헤더에 토큰을 함께 보내 요청에 대한 유효성 검사를 진행
4. **Redux toolkit을 사용한 전역상태관리**
   - 보일러플레이트 코드가 없고 immer 라이브러리가 포함되어 있기 때문에 불변성을 지키지 않고 간편하게 상태 관리가 용이하였음
5. **RTK Query를 사용한 데이터 패칭**
   - API 요청의 템플릿을 마련하기 위해 RTK Query를 사용
6. **웹 접근성 및 SEO 개선**
   - 시멘틱한 태그 사용
   - rem 사용
   - 이미지에 alt 태그 넣기
   - 웹페이지별로 제목 커스텀 작업
   - 서버사이드 렌더링 사용
7. **반응형 디자인 적용**
   - 모바일 디바이스 크기(320px ~ 900px)에 한정하여 반응형 디자인을 구현
