import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class ModalAddCertificate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameCertificate: "",
            addressCertificate: "",
            yearCertificate: "",
            typeCertificate: "Xuất sắc",
            file: "",
            urlFile: " ",
            fileUpload: " ",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeFile = this.handleChangeFile.bind(this);
    }
    componentDidMount() {
        let script = document.createElement('script');
        script.src = 'lib/main/js/AddEmployee.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }
    // function: notification the result of an action
    notifysuccess = (message) => toast(message);
    notifyerror = (message) => toast.error(message);
    notifywarning = (message) => toast.warning(message);

    handleChangeFile(event) {
        const { name } = event.target;
        var file = event.target.files[0];
        var url = URL.createObjectURL(file);
        var fileLoad = new FileReader();
        fileLoad.readAsDataURL(file);
        fileLoad.onload = () => {
            this.setState({
                [name]: file.name,
                urlFile: url,
                fileUpload: file,
            })
        };
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleCloseModale = () => {
        this.setState({
            nameCertificate: "",
            addressCertificate: "",
            yearCertificate: "",
            typeCertificate: "Xuất sắc",
            file: "",
            urlFile: " ",
            fileUpload: " "
        })
        window.$(`#modal-addNewCertificate-${this.props.index}`).modal("hide");
    }
    handleSubmit() {
        if (this.state.nameCertificate === "") {
            this.notifyerror("Bạn chưa nhập tên bằng cấp");
        } else if (this.state.addressCertificate === "") {
            this.notifyerror("Bạn chưa nhập nơi đào tạo");
        } else if (this.state.yearCertificate === "") {
            this.notifyerror("Bạn chưa nhập năm tốt nghiệp");
        } else if (this.state.typeCertificate === "") {
            this.notifyerror("Bạn chưa nhập xếp loạt");
        } else {
            this.props.handleChange(this.state);
            this.setState({
                nameCertificate: "",
                addressCertificate: "",
                yearCertificate: "",
                typeCertificate: "Xuất sắc",
                file: "",
                urlFile: " ",
                fileUpload: " "
            })
            document.getElementById(`formCertificate-${this.props.index}`).reset();
            window.$(`#modal-addNewCertificate-${this.props.index}`).modal("hide");
        }

    }
    render() {
        return (
            <React.Fragment>
                <a className="btn btn-success pull-right" style={{ marginBottom: 15 }} data-toggle="modal" href={`#modal-addNewCertificate-${this.props.index}`} title="Thêm mới bằng cấp">Thêm mới</a>
                <div className="modal fade" id={`modal-addNewCertificate-${this.props.index}`} tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" onClick={() => this.handleCloseModale()} aria-label="Close">
                                    <span aria-hidden="true">×</span></button>
                                <h4 className="modal-title">Thêm mới bằng cấp:</h4>
                            </div>
                            <form id={`formCertificate-${this.props.index}`}>
                                <div className="modal-body">
                                    <div className="col-md-12">
                                        <div className="checkbox" style={{ marginTop: 0 }}>
                                            <label style={{ paddingLeft: 0 }}>
                                                (<span style={{ color: "red" }}>*</span>): là các trường bắt buộc phải nhập.
                                                        </label>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="nameCertificate">Tên bằng cấp:<span className="required">&#42;</span></label>
                                            <input type="text" className="form-control" name="nameCertificate" onChange={this.handleChange} autoComplete="off" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="addressCertificate">Nơi đào tạo:<span className="required">&#42;</span></label>
                                            <input type="text" className="form-control" name="addressCertificate" onChange={this.handleChange} autoComplete="off" />
                                        </div>
                                        <div className="form-group col-md-6" style={{ paddingLeft: 0 }}>
                                            <label htmlFor="yearCertificate">Năm tốt nghiệp:<span className="required">&#42;</span></label>
                                            <input type="text" className="form-control" name="yearCertificate" onChange={this.handleChange} autoComplete="off" />
                                        </div>
                                        <div className="form-group col-md-6" style={{ paddingRight: 0 }}>
                                            <label htmlFor="typeCertificate">Xếp loại:<span className="required">&#42;</span></label>
                                            <select className="form-control" defaultValue="Đã chấp nhận" name="typeCertificate" onChange={this.handleChange}>
                                                <option value="Xuất sắc">Xuất sắc</option>
                                                <option value="Giỏi">Giỏi</option>
                                                <option value="Khá">Khá</option>
                                                <option value="Trung bình khá">Trung bình khá</option>
                                                <option value="Trung bình">Trung bình</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="file">Chọn file đính kèm:</label>
                                            <input type="file" style={{ height: 34, paddingTop: 2 }} className="form-control" name="file" onChange={this.handleChangeFile} />
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button style={{ marginRight: 15 }} type="reset" className="btn btn-default pull-right" onClick={() => this.handleCloseModale()}>Đóng</button>
                                    <button style={{ marginRight: 15 }} type="button" className="btn btn-success" onClick={this.handleSubmit} title="Thêm mới bằng cấp" >Thêm mới</button>
                                </div>
                            </form>
                        </div>
                    </div >
                </div>
            </React.Fragment>
        );
    }
};
export { ModalAddCertificate };