import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import categories from "../../../../data/constants/categories";
import InputField from "../../../custom/InputField";

class ManageCategories extends Component {

    public render() {
        return (
            <main className="main manage-categories">
                <h1>Manage App categories</h1>
                <div className="categories-panel">
                    <div className="current-catefories">
                        <h3>List of current categories</h3>
                        <ul>
                            {categories.map((category: string, index: number) => (
                                <li key={index}>
                                    {category}
                                    <div className="category-edit-controls">
                                        <a className="edit" href="#">edit</a>
                                        <span> | </span>
                                        <a className="delete" href="#">x</a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="add-category">
                        <InputField id="category" type="text" label="category"/>
                        <div className="admin-controls">
                            <Button title="Add">Add</Button>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default ManageCategories;
