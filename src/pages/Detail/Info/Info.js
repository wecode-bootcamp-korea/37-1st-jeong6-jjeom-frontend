import React from 'react';
import './Info.scss';

const Info = ({ description }) => {
  return (
    <div className="info">
      <section className="info_basic">
        <h1>상품 기본정보</h1>
        <ul>
          <li>
            <p>·품목명</p>
            <p>{description.name}</p>
          </li>
          <li>
            <p>·내용량</p>
            <p>중량 {description.weight}, 실중량은 제품에 별도 표기</p>
          </li>
          <li>
            <p>·원산지</p>
            <p>국내산</p>
          </li>
          <li>
            <p>·유통기한</p>
            <p>제품에 별도 표기</p>
          </li>
          <li>
            <p>·보관방법</p>
            <p>{description.storage}</p>
          </li>
        </ul>
      </section>
      <section className="info_delivery">
        <h1>배송 정보</h1>
        <div className="info_delivery_container">
          <div className="delivery_how">
            <p className="delivery_sub_title">배송 방법</p>
            <ul>
              <li>
                <p className="content_title">당일배송</p>
                <div>
                  <p className="sub-text">서울,경기 (일부)</p>
                  <p>낮 12시까지 주문,오후 7시 전 도착(월~금)</p>
                </div>
              </li>
              <li>
                <p className="content_title">새벽배송</p>
                <div>
                  <p className="sub-text">수도권, 충청 (일부)</p>
                  <p>오후 8시까지 주문, 다음 날 오전 7시 전 도착 (화~토)</p>
                </div>
              </li>
              <li>
                <p className="content_title">택배배송</p>
                <div>
                  <p className="sub-text">그 외 지역</p>
                  <p>오후 8시까지 주문, 다음 날 오후 전 도착 (화~토)</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="delivery_benefits">
            <p className="delivery_sub_title">배송비 혜택</p>
            <ul>
              <li>
                <p className="content_title">신선할인</p>
                <div>
                  <p>
                    상품을 추가하실 때 마다 배송비가 10%, 30%, 60%,100% 비율로
                    할인됩니다. 총 5개 이상 담으시면 배송비 없이 상품을 받아보실
                    수 있습니다. 우유 상품은 신선할인 대상에서 제외됩니다.
                  </p>
                </div>
              </li>
              <li>
                <p className="content_title">신선플랜</p>
                <div>
                  <p>
                    한 번 배송비 (3,500원)에 1달 동안 4번 무료배송 받으실 수
                    있는 정육각의 배송 서비스입니다.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="info_refund">
        <h1>교환/환불 안내</h1>
        <p>
          - 신선식품이기 때문에 단순 변심으로 인한 개인적인 사유로는 교환 및
          환불이 불가합니다.
          <br />
          <br />
          <br />
          - 상품의 변질, 이물질 발견, 아이스박스 및 아이스팩이 파손되어 배송될
          경우 고객센터(1800-0658)로 전화주시면 곧바로 교환/환불 해드리겠습니다.
          <br />
          <br />
          <br />
          - 고객센터 운영 시간은 평일 오전 8시 30분-5시 30분이며, 운영 시간
          이외에는 전화 문의가 어렵습니다.
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;고객센터 1:1 문의 혹은 카카오톡 플러스친구
          @정육각으로 사진과 함께 내용을 적어 보내주시면
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;담당자가 확인 후 빠르게 처리 도와드리겠습니다.
        </p>
      </section>
    </div>
  );
};

export default Info;
