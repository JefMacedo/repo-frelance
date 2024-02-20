import React from 'react';

// TO-DO - Melhorar o design do botão
// TO-DO - Fazer um badge com mensagem de chamada para clicar no botão
class WhatsAppButton extends React.Component {
  handleClick = () => {
    const phoneNumber = '556592833530';
    const message = 'Olá! 👋 Gostaria de falar mais sobre um projeto de desenvolvimento 🚀';
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, '_blank');
  };

  render() {
    return (
      <div style={styles.container}>
        <button style={styles.button} onClick={this.handleClick}>
          <i className="fab fa-whatsapp" alt="WhatsApp" style={styles.icon} title='Me conte sobre seu projeto' />
        </button>
      </div>
    );
  }
}

const styles = {
  container: {
    position: 'fixed',
    bottom: 20,
    right: 20,
    fontSize:'33px',
    zIndex: 999,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: '50%',
    backgroundColor: '#25D366',
    color: '#fff',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    objectFit: 'cover',
  },
};

export default WhatsAppButton;