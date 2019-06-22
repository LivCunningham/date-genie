// import React, { useState } from 'react'
// import CheeseburgerMenu from 'cheeseburger-menu'
// import MenuContent from './menuContent'

// class SliderMenu extends Component {
//   render() {
//     return (
//       <>

//     this.state = {
//       menuOpen: false,
//     }
//   }

//   openMenu() {
//     this.setState({ menuOpen: true })
//   }

//   closeMenu() {
//     this.setState({ menuOpen: false })
//   }

//   render() {
//     return <div>
//       <CheeseburgerMenu
//         isOpen={this.state.menuOpen}
//         closeCallback={this.closeMenu.bind(this)}>
//         <MenuContent closeCallback={this.closeMenu.bind(this)}/>
//       </CheeseburgerMenu>

//       <HamburgerMenu
//         isOpen={this.state.menuOpen}
//         menuClicked={this.openMenu.bind(this)}
//         width={32}
//         height={24}
//         strokeWidth={3}
//         rotate={0}
//         color='black'
//         borderRadius={0}
//         animationDuration={0.5}
//       />

//       <div style={contentStyles}>
//         <h1>Cheeseburger Menu demo</h1>
//         <p>Click the hamburger icon to open menu</p>
//       </div>
//     </div>
//   }
// }

// render(<App />, document.getElementById('root'))
//       </>
//     )
//   }
// }

// export default SliderMenu;
