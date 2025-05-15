<style>
/* product_card */
.product_card {
  max-width: 340px;
  padding: 16px;
  position: relative;
  background: #fff;
  border: 1px solid #c2c2c2;
  border-radius: 8px;
}
.product_header {
  display: flex;
  align-items: flex-start;
}
.buy_count_label {
  margin-left: 8px;
  padding: 3px 8px;
  color: #2866ec;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 150% */
  border-radius: 900px;
  border: 1px solid #2866ec;
}
.product_header_option {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
}
.product_header_option button {
  width: 24px;
  height: 24px;
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
}
.product_header_option .pin {
  background-image: url('/src/assets/img/cart/pin.png');
}
.product_header_option .pin.active {
  background-image: url('/src/assets/img/cart/pin_active.png');
}
.product_header_option .zzim {
  background-image: url('/src/assets/img/cart/zzim.png');
}
.product_header_option .zzim.active {
  background-image: url('/src/assets/img/cart/zzim_active.png');
}
.product_box {
  display: flex;
  align-items: flex-start;
  margin-top: 24px;
}
.product_image {
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 8px;
  border: 1px solid #c2c2c2;
}
.product_info {
  margin-left: 26px;
}
.brand {
  color: #888;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.product_title {
  margin-top: 2px;
  color: #222;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
}
.stock {
  display: inline-block;
  margin-top: 4px;
  padding: 3px 8px;
  color: #2196f3;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 150% */
  border-radius: 12px;
  background: #f5f5f5;
}
.option_info {
  width: calc(100% - 108px);
  margin: 12px 0 0 auto;
}
.row {
  display: flex;
  align-items: center;
  padding: 6px 0;
  color: #444;
  font-size: 15px;
}
.option_label {
  flex: 1;
  color: #c2c2c2;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
}
.row.active .option_label {
  color: #000;
}
.option_controls {
  display: flex;
  align-items: center;
  gap: 8px;
}
.option_controls button {
  width: 24px;
  height: 24px;
  border: none;
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.option_controls span {
  width: 40px;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
}
.row.active .option_controls span {
  color: #2866ec;
}
.row.active .option_controls .count_minus {
  background-image: url('/src/assets/img/cart/btn_mn_active.png');
}
.count_minus {
  background-image: url('/src/assets/img/cart/btn_mn.png');
}
.count_plus {
  background-image: url('/src/assets/img/cart/btn_pu_active.png');
}
.pop-order {
  color: #bbb;
  font-size: 15px;
  margin: 8px 0 0 0;
  display: flex;
  align-items: center;
  gap: 4px;
}
.pop-order input[type='checkbox'] {
  accent-color: #2196f3;
}
.price {
  text-align: right;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 122.222% */
}
.price span {
  font-size: 14px;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
} /* 체크박스 스타일 */
.style_checkbox {
  display: inline-block;
  width: 24px;
  height: 24px;
  position: relative;
  vertical-align: middle;
}
.style_checkbox input[type='checkbox'] {
  opacity: 0;
  width: 24px;
  height: 24px;
  margin: 0;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
  z-index: 2;
}
.style_checkbox img {
  width: 24px;
  height: 24px;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
.style_checkbox input[type='checkbox']:checked + img {
  content: url('/src/assets/img/cart/checkbox_active.png');
}
.style_checkbox input[type='checkbox']:not(:checked) + img {
  content: url('/src/assets/img/cart/checkbox.png');
}
</style>
