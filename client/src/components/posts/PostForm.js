import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addPost } from '../../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
<<<<<<< HEAD
      signal: '',
      buyorsell: 'Select Buy or Sell',
=======
>>>>>>> 75d05f4e83af2c987ba171ff22beaa8440c4eeed
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
<<<<<<< HEAD
    this.onDropdownSelected = this.onDropdownSelected.bind(this);
  }

  componentWillMount(){
    console.log("component mounted");
=======
>>>>>>> 75d05f4e83af2c987ba171ff22beaa8440c4eeed
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
<<<<<<< HEAD
    console.log("suimtted");
    const { user } = this.props.auth;
    const newPost = {
      text: this.state.text,
      buyorsell: this.state.buyorsell,
      signal: this.state.signal,
=======

    const { user } = this.props.auth;

    const newPost = {
      text: this.state.text,
>>>>>>> 75d05f4e83af2c987ba171ff22beaa8440c4eeed
      name: user.name,
      avatar: user.avatar
    };

    this.props.addPost(newPost);
    this.setState({ text: '' });
  }

<<<<<<< HEAD
  onDropdownSelected(e){
    this.setState({ buyorsell: e.target.value});
  }

=======
>>>>>>> 75d05f4e83af2c987ba171ff22beaa8440c4eeed
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">Say Somthing...</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <TextAreaFieldGroup
<<<<<<< HEAD
                  placeholder="Description of Signal"
=======
                  placeholder="Create a post"
>>>>>>> 75d05f4e83af2c987ba171ff22beaa8440c4eeed
                  name="text"
                  value={this.state.text}
                  onChange={this.onChange}
                  error={errors.text}
                />
<<<<<<< HEAD
                <TextAreaFieldGroup
                  placeholder="Signal"
                  name="signal"
                  value={this.state.signal}
                  onChange={this.onChange}
                  error={errors.text}
                />
                <div class="custom-select">
                  <select onChange={this.onDropdownSelected} value={this.state.buyorsell} >
                    <option value="0">Select Buy or Sell:</option>
                    <option value="buy">Buy</option>
                    <option value="sell">Sell</option>
                  </select>
                </div>
=======
>>>>>>> 75d05f4e83af2c987ba171ff22beaa8440c4eeed
              </div>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { addPost })(PostForm);
