import {Component} from 'react'
import BrowserTodoItem from './components/BrowserTodoItem'
import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here

class App extends Component {
  state = {
    browserHistory: initialHistoryList,
    searchInput: '',
  }

  searchInputValue = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistory = id => {
    const {browserHistory} = this.state
    const updatedHistory = browserHistory.filter(
      historyItem => historyItem.id !== id,
    )
    this.setState({browserHistory: updatedHistory})
  }

  render() {
    const {browserHistory, searchInput} = this.state
    const searchResult = browserHistory.filter(item =>
      item.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div>
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="logo-image"
            alt="app logo"
          />
          <div className="search-icon-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-icon"
              alt="search"
            />
            <hr />
            <input
              type="search"
              className="input-element-style"
              placeholder="Search History"
              value={searchInput}
              onChange={this.searchInputValue}
            />
          </div>
        </div>
        <div className="content-container">
          {searchResult.length >= 1 ? (
            <ul className="list-item-container">
              {searchResult.map(eachItem => (
                <BrowserTodoItem
                  key={eachItem.id}
                  eachItem={eachItem}
                  deleteHistory={this.deleteHistory}
                />
              ))}
            </ul>
          ) : (
            <p className="error-message"> There is no history to show </p>
          )}
        </div>
      </div>
    )
  }
}

export default App
