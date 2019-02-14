import React, { Component } from "react";
import { connect } from "react-redux";
import { IAd, IUser, IState } from "../../../../../data/interfaces";
import { getAds, getUserAds, deleteAd } from "../../../../../data/actions/actionCreators";

interface IUserAdsProps {
  user: IUser;
  ads: IAd[];
  userAds: IAd[];
  getAds: () => void;
  getUserAds: () => void;
  deleteAd: (id: string) => void;
}

class UserAds extends Component<IUserAdsProps> {

  public updateAds() {
    this.props.getAds();
    this.props.getUserAds();
  }

  public componentDidMount() {
    this.updateAds();
  }

  public deleteAdHandler = (e: any) => {
    e.preventDefault();

    this.props.deleteAd(e.target.id);

    setTimeout(() => {
        this.updateAds();
    }, 1000);
  }

  public render() {
    const { userAds } = this.props;

    if (!userAds.length) {
      return (
        <div className="main user-account-ads">
          <h1>You haven't posted ads yet...</h1>
        </div>
      )
    }

    return (
        <main className="main user-account-ads">
            <h1>My Ads</h1>
            <div className="ads">
                {userAds.map((ad: IAd, index: number) => (
                    <div className="ad" key={index}>
                        <div className="ad-info">
                            <div className="ad-info-date">
                                {new Date(ad.date as string).toDateString()}
                            </div>
                            <div className="ad-info-user">
                                Username: {ad.username} (ad id#: {ad.id})
                            </div>
                            <div className="ad-info-action">
                                <a className="edit"
                                    title="edit"
                                    href="#"
                                >
                                    edit
                                </a>
                                <span> | </span>
                                <a className="delete"
                                title="delete"
                                id={ad.id}
                                onClick={this.deleteAdHandler}
                                >
                                    x
                                </a>
                            </div>
                        </div>
                        <div className="ad-content">
                            <div className="ad-content-category">
                                Category: {ad.category}
                            </div>
                            <div className="ad-content-title">
                                Title: {ad.title}
                            </div>
                            <div className="ad-content-description">
                                <div>
                                    Description
                                </div>
                                {ad.description}
                            </div>
                            <div className="ad-content-price">
                                {ad.price}
                            </div>
                        </div>
                </div>
                ))}
            </div>
        </main>
    )
  }
}

const mapStateToProps = (state: IState) => ({
  user: state.users,
  ads: state.ads,
  userAds: state.userAds,
});

const mapDispatchToProps = {
  getAds,
  getUserAds,
  deleteAd,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAds);
