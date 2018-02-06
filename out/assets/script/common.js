/*
 * Petrichor
 * (c) 2013, Web factory Ltd
 */

$(function() {
  // init newsletter subscription AJAX handling
  if ($('#newsletterform').length) {
    if ($('#newsletterform').attr('data-mailchimp') == 'true') {
      $('#newsletterform').attr('action', '_newsletter-subscribe-mailchimp.php');
      $('#newsletterform').ajaxForm({ dataType: 'json',
                                      timeout: 2000,
                                      success: newsletterResponseMailchimp});
    } else {
      $('#newsletterform').attr('action', '_newsletter-subscribe.php');
      $('#newsletterform').ajaxForm({ dataType: 'json',
                                      timeout: 2000,
                                      success: newsletterResponse});
    }
    $('#button-newsletter').click(function() { $('#newsletterform').submit(); return false; });
  } // if newsletter form
}); // onload

// handle newsletter subscribe AJAX response
function newsletterResponse(response) {
  if (response.responseStatus == 'err') {
    if (response.responseMsg == 'ajax') {
      alert('Error - this script can only be invoked via an AJAX call.');
    } else if (response.responseMsg == 'fileopen') {
      alert('Error opening $emailsFile. Please refer to documentation for help.');
    } else if (response.responseMsg == 'name') {
      alert('Por favor, insira seu nome.');
    } else if (response.responseMsg == 'email') {
      alert('Por favor, insira um e-mail valido.');
    } else if (response.responseMsg == 'duplicate') {
      alert('Seus dados ja estao cadastrados em nosso banco de dados.');
    } else if (response.responseMsg == 'filewrite') {
      alert('Error writing to $emailsFile. Please refer to documentation for help.');
    } else {
      alert('Tivemos um problema no seu cadastro. Atualize o site e tente novamente.');
    }
  } else if (response.responseStatus == 'ok') {
    alert('Bem vindo a People Interactive! Em breve entraremos em contato.');
  } else {
    alert('Tivemos um problema no seu cadastro. Atualize o site e tente novamente.');
  }
} // newsletterResponse

// handle newsletter subscribe AJAX response - Mailchimp ver
function newsletterResponseMailchimp(response) {
  if (response.responseStatus == 'err') {
    if (response.responseMsg == 'ajax') {
      alert('Error - this script can only be invoked via an AJAX call.');
    } else if (response.responseMsg == 'name') {
      alert('Please enter a valid name.');
    } else if (response.responseMsg == 'email') {
      alert('Please enter a valid email address.');
    } else if (response.responseMsg == 'listid') {
      alert('Invalid MailChimp list name.');
    } else if (response.responseMsg == 'duplicate') {
      alert('Seus dados ja estao cadastrados em nosso banco de dados.');
    } else {
      alert('Tivemos um problema no seu cadastro. (' + response.responseMsg + '). Atualize o site e tente novamente.');
    }
  } else if (response.responseStatus == 'ok') {
    alert('Bem vindo a People Interactive! Por favor, acesse seu e-mail e confirme seu contato.\.');
  } else {
    alert('Tivemos um problema no seu cadastro. Atualize o site e tente novamente.');
  }
} // newsletterResponseMailchimp