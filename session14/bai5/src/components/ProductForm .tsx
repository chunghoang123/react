import React, { Component } from "react";
type StateType = {
  maSP: string;
  tenSP: string;
  gia: string;
  soLuong: string;
};

export default class ProductForm extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    
    this.state = {
      maSP: "",
      tenSP: "",
      gia: "",
      soLuong: "",
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as unknown as Pick<StateType, keyof StateType>);
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    const product = {
      maSP: this.state.maSP,
      tenSP: this.state.tenSP,
      gia: this.state.gia,
      soLuong: this.state.soLuong,
    };
    
    console.log("Product:", product);
    alert("Đã thêm sản phẩm thành công!");
  };

  render() {
    return (
      <>

        <div className="product-form-container">
          <div className="product-form-card">
            <h2 className="form-title">Thêm mới sản phẩm</h2>
            
            <div className="form-wrapper" onSubmit={this.handleSubmit}>
              <div className="input-group">
                <label className="form-label">Mã sản phẩm</label>
                <input
                  type="text"
                  name="maSP"
                  value={this.state.maSP}
                  onChange={this.handleChange}
                  placeholder="SP001"
                  className="form-input"
                  required
                />
              </div>

              <div className="input-group">
                <label className="form-label">Tên sản phẩm</label>
                <input
                  type="text"
                  name="tenSP"
                  value={this.state.tenSP}
                  onChange={this.handleChange}
                  placeholder="Cam da xanh"
                  className="form-input"
                  required
                />
              </div>

              <div className="input-group">
                <label className="form-label">Giá</label>
                <input
                  type="number"
                  name="gia"
                  value={this.state.gia}
                  onChange={this.handleChange}
                  placeholder="20000"
                  className="form-input"
                  min="0"
                  required
                />
              </div>

              <div className="input-group">
                <label className="form-label">Số lượng</label>
                <select
                  name="soLuong"
                  value={this.state.soLuong}
                  onChange={this.handleChange}
                  className="form-select"
                  required
                >
                  <option value="">Chọn số lượng</option>
                  {[...Array(20)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                onClick={this.handleSubmit}
                className="submit-button"
              >
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}