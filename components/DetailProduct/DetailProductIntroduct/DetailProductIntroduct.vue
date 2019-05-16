<template>
  <div class="introduce-product">
    <div class="fistProductView">
      <div class="productImage">
        <img :alt="$store.state.DetailProductStore.data_detail_product.title"
             src="/lazy_load/loading_v4.jpg" v-lazy="$store.state.DetailProductStore.data_detail_product.product_detail.picture_full[0].url"
             />
      </div>
      <div class="productImageZoomItem">
        <img :alt="$store.state.DetailProductStore.data_detail_product.title"
             src="/lazy_load/loading_v4.jpg" v-lazy="$store.state.DetailProductStore.data_detail_product.product_detail.picture_thumb[0].url"
             onerror="img_error(this)"/>
      </div>
    </div>
    <div class="middleProductView">
      <div class="productRate">
        <h1 :title="$store.state.DetailProductStore.data_detail_product.title" v-html="$store.state.DetailProductStore.data_detail_product.title">
        </h1>

      </div>
      <div class="BillInformation">
        <p class="price-pro">{{convertInt($store.state.DetailProductStore.data_detail_product.product_detail.price)}} VNĐ</p>
        <ul class="vote-view">
          <li>
            <a href="">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <span>0</span>
            <span>Đánh giá</span>
          </li>
          <li>
            <span class="large" style="color:#61bc48;">1070 </span>
            <span>Lượt đã xem</span>
          </li>
          <li>
            <span class="large large-34">34 </span>
            <span>Lượt mua thành công</span>
          </li>
        </ul>
        <div class="ProductInformation">
          <table>
            <tbody>
            <tr>
              <td class="bold">ID sản phẩm</td>
              <td>{{$store.state.DetailProductStore.data_detail_product.product_detail.id}}</td>
            </tr>
            <tr>
              <td class="bold">Tên sản phẩm</td>
              <td v-html="$store.state.DetailProductStore.data_detail_product.product_detail.name">
              </td>
            </tr>
            <tr>
              <td class="bold">Thương hiệu</td>
              <td>Đang cập nhật</td>
            </tr>
            <tr>
              <td class="bold">Xuất xứ</td>
              <td>Đang cập nhật
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="SaleProduct">
        <div>
          <div class="pick">
            <div class="head">Số lượng</div>
            <div class="btn" id="sub">-</div>
            <input class="input" type="text" id="quantity" value="1">
            <div class="btn" id="add">+</div>
            <div class="head head-pro"><span
              class="pro-quantity">{{$store.state.DetailProductStore.data_detail_product.product_detail.quantity}}</span> sản phẩm có sẵn
            </div>
          </div>
        </div>

      </div>
      <div class="add-to-cart">
        <div id="buy-btn">
          <button id="buy">Mua ngay</button>
          <button id="cart">
            <div class="bag"><img src="/assets/images/bag.png" alt="Giỏ hàng"></div>
            Thêm vào giỏ
          </button>
        </div>

      </div>
      <div class="support-online">
        <h2>Hỗ trợ trực tuyến</h2>
        <p>
          <i class="fa fa-skype" aria-hidden="true" style="color: blue"></i>
          <span>Hỗ trợ 1-18008183 </span>
        </p>
        <p>
          <i class="fa fa-smile-o" aria-hidden="true" style="color: red"></i>
          <span>Hỗ trợ 2-0944944449 </span>
        </p>
      </div>
    </div>
    <div class="info-product">
      <detail-product-information></detail-product-information>
      <detail-product-rate></detail-product-rate>
      <detail-product-comment></detail-product-comment>
    </div>
  </div>
</template>

<script>
  import DetailProductInformation from '@/components/DetailProduct/DetailProductInformation/DetailProductInformation.vue';
  import DetailProductRate from '@/components/DetailProduct/DetailProductRate/DetailProductRate.vue';
  import DetailProductComment from '@/components/DetailProduct/DetailProductComment/DetailProductComment.vue';

  export default {
    name: "detail-product-introduct",
    components: {
      DetailProductInformation: DetailProductInformation,
      DetailProductRate: DetailProductRate,
      DetailProductComment: DetailProductComment
    },
    methods: {
      convertInt(number) {
        return parseInt(number).toLocaleString('en');
      }
    }
  }
</script>

