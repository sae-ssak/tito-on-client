"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "@styles/main-swiper.css";
import { PaginationOptions } from "swiper/types";

import styled from "@emotion/styled";
import Image from "next/image";

const BANNER: Banner[] = [
  {
    title1: "티토챗과의 AI상담으로",
    title2: "궁금한 점은 언제, 어디서나!",
    description1: "진로부터 학업 관련 궁금증이 생길 땐, 티토챗에게 물어봐!",
    url: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/6120cd13-9acd-4eca-9557-7888c364ec00/public",
  },
  {
    title1: "오늘 너의 하루는 어때?",
    title2: "위로 가득한 나만의 행운 카드",
    description1: "기분에 맞춰 행운 카드를 뽑아보세요.",
    description2:
      "지친 일상에 위로도, 활력도 더해줄 나만의 쉼터가 되어드릴게요!",
    url: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/9e2c7a0a-b915-4ae8-3a83-5f1858dd1900/public",
  },
  {
    title1: "필요한 정보는",
    title2: "저장 및 보관까지!",
    description1: "티토봇과의 상담내용을 저장하고 필요할 때 꺼내볼 수 있어요!",
    url: "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/2eaab8a8-91c1-4f06-0905-314ebc6f1e00/public",
  },
];

export default function Home() {
  const pagination: PaginationOptions = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<div class="' + className + '"></div>';
    },
  };
  return (
    <Main>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        loop={true}
        pagination={pagination}
        modules={[Autoplay, Pagination]}
        className="banner-swiper"
        spaceBetween={20}
      >
        {BANNER.map((banner, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <LeftSide>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <TitleWrapper>
                    <Title>{banner.title1}</Title>
                    <Title>{banner.title2}</Title>
                  </TitleWrapper>
                  <DescriptionWrapper>
                    <Description>{banner.description1}</Description>
                    <Description>{banner.description2}</Description>
                  </DescriptionWrapper>
                </div>
                <ButtonWrapper>
                  <Button>
                    티토온 시작하기
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 3.75L16.25 9M16.25 9L11 14.25M16.25 9L2.75 9"
                        stroke="#F9FAFB"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>
                </ButtonWrapper>
              </LeftSide>
              <RightSide>
                <Image
                  src={banner.url}
                  alt={`banner-${index}`}
                  fill
                  priority
                  sizes="400px"
                />
              </RightSide>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url("/images/gradient-mesh-02.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Button = styled.button`
  border: none;
  border-radius: 50px;
  background-color: #0094ff;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  padding: 16px 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 82px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RightSide = styled.div`
  position: relative;
  width: 400px;
  height: 400px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.div`
  width: fit-content;
  font-size: 50px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: -2.5px;

  @media (max-width: 1024px) {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const Description = styled.div`
  width: fit-content;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0px;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
