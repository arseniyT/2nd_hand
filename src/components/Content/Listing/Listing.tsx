import React from "react";
import { connect } from "react-redux";
import { IState, IAd, IUser } from "../../../data/interfaces";
import { getAds, deleteAd } from "../../../data/actions/actionCreators";
import { withRouter, RouteComponentProps } from "react-router";

interface IListingProps {
  ads: IAd[];
  user: IUser;
  userAds: IAd[];
  getAds: () => void;
  deleteAd: (id: string) => void;
}

class Listing extends React.Component<IListingProps & RouteComponentProps> {

  public componentDidMount() {
    this.props.getAds();
  }

  public deleteAdHandler = (e: any) => {
    e.preventDefault();

    this.props.deleteAd(e.target.id);

    setTimeout(() => {
        this.props.getAds();
    }, 1000);
  }

  public render() {
    const { ads, user } = this.props;

    if (!ads.length) {
      return (
        <div className="main listing">
          <h1>No posted ads...</h1>
        </div>
      )
    } else {
        return (
            <>
              <main className="main listing">
                <div className="ads">
                    {ads.map((ad: IAd, index: number) => (
                        <div className="ad" key={index}>
                            <div className="ad-info">
                                <div className="ad-info-date">
                                    {new Date(ad.date as string).toDateString()}
                                </div>
                                <div className="ad-info-user">
                                    Username: {ad.username} (ad id#: {ad.id})
                                </div>
                                <div className="ad-info-action">
                                    {user.role === "admin" &&
                                        <>
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
                                        </>
                                    }
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
            </>
        )
    }
  }
}

const mapStateToProps = (state: IState) => ({
  user: state.user,
  ads: state.ads,
  userAds: state.userAds,
});

export default withRouter(connect(mapStateToProps, {getAds, deleteAd})(Listing));
