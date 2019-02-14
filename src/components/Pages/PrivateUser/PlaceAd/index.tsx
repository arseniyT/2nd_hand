import React, { Component } from "react";
import SelectField from "../../../custom/SelectField";
import InputField from "../../../custom/InputField";
import categories from "../../../../data/constants/categories";
import { IState, IAd, IUser } from "../../../../data/interfaces";
import { connect } from "react-redux";
import { addAd, getUserAds } from "../../../../data/actions/actionCreators";
import { withRouter, RouteComponentProps } from "react-router";

interface IPlaceAdProps {
    ads: IAd[];
    user: IUser;
    placingAd: IAd;
    addAd: (payload: IAd) => void;
    getUserAds: (user: IUser) => void;
}

class PlaceAd extends Component<IPlaceAdProps & RouteComponentProps, { [key: string]: any }> {
  public state = {
    username: "",
    category: "",
    title: "",
    description: "",
    price: ""
  }

  public componentDidMount() {
    this.props.getUserAds(this.props.user);
  }

  public submitHandler = (e: any) => {
    e.preventDefault();

    const data: IAd = {
      id: Math.ceil(Math.random()*10000000).toString(),
      date: new Date().toDateString(),
      username: this.props.user.username,
      category: e.target.category.value,
      title: e.target.title.value,
      description: e.target.description.value,
      price: e.target.price.value,
    };

    this.props.addAd(data);

    this.setState({       
      category: "",
      title: "",
      description: "",
      price: "" 
    });
    
    e.target.reset();
    console.log(this.state);
  }

  public selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    this.setValueToState(e);
  }

  public textareaChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    this.setValueToState(e);
  }

  public inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setValueToState(e);
  }

  public setValueToState = (e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement>): void => {
    const stateKey = e.target.name;
    const stateValue = e.target.value;

    setTimeout(() => {
        this.setState({ [stateKey]: stateValue });
        console.log(this.state);
    }, 1000);
  }

  public render() {
    return (
      <main className="main place-ad-page">
            <h1>Place your Ad</h1>
            <form id="place-ad-form" onSubmit={this.submitHandler}>
                <SelectField
                    id="category"
                    name="category"
                    label="category"
                    items={categories}
                    onChange={this.selectChangeHandler}
                />
                <InputField
                    id="title"
                    type="title"
                    name="title"
                    label="title"
                    onChange={this.inputChangeHandler}
                />
                <div className="place-ad-description">
                  <div>Description</div>
                  <textarea 
                      id="description" 
                      name="description"
                      onChange={this.textareaChangeHandler}
                  />
                </div>
                <InputField
                    id="price"
                    type="price"
                    name="price"
                    label="price"
                    onChange={this.inputChangeHandler}
                />
                <button type="submit">post</button>
            </form>
      </main>
    )
  }
}

const mapStateToProps = (state: IState) => ({
  user: state.user,
  placingAd: state.placingAd,
  ads: state.ads,
});

const mapDispatchToProps = {
  addAd,
  getUserAds,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaceAd));
