import React from "react";
import { connect } from "react-redux";
import { IState, IAd } from "../../../data/interfaces";
import { withRouter, RouteComponentProps } from "react-router";

interface ISearchResultProps {
  filteredAds: IAd[];
}

class SearchResult extends React.Component<ISearchResultProps & RouteComponentProps, {}> {

  public render() {
    const { filteredAds } = this.props;

    if (!filteredAds.length) {
        return (
            <div className="main listing">
                <h1>No matched ads for your request...</h1>
            </div>
        )
    } else {
        return (
            <>
              <main className="main listing">
                <h1>Search results for '{filteredAds[0].category}'</h1>
                <div className="ads">
                    {filteredAds.map((ad: IAd, index: number) => (
                        <div className="ad" key={index}>
                            <div className="ad-info">
                                <div className="ad-info-date">
                                    {new Date(ad.date as string).toDateString()}
                                </div>
                                <div className="ad-info-user">
                                    Username: {ad.username} (ad id#: {ad.id})
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
    filteredAds: state.filteredAds,
});

export default withRouter(connect(mapStateToProps)(SearchResult));
