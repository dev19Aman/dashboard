export const sidebarWidth = {
    full: 250,
    small: 76,
    transition: (type?: string) => {
      return `0.6s ${type ? type : 'all'} cubic-bezier(0.76, 0, 0.24, 1)`;
    },
  };
  
  export const appbarHeight = 70;
  
  export const themeColor = {
    background:'#696CFF'
  }