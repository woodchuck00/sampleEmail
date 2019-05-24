/**
 * Any code used inside this helper is ignored by Handlebars. Use it if your email service provider uses a Handlebars-like syntax.
 * @example
 * {{{{raw}}}}
 * {{ this }} code won't be parsed.
 * {{{{/raw}}}}
 */
module.exports = function(options) {

  var src = options.hash.src;
  var bgcolor = options.hash.bgcolor;
  var classes = options.hash.classes;
  var imgwidth = options.hash.imgwidth;
  var imgheight = options.hash.imgheight;
  var top_padding = options.hash.top_padding;
  var bottom_padding = options.hash.bottom_padding;
  var fitcontent = options.hash.fitcontent;
  var msofit = '';
  var unitHeight = '';
  var spacer_top = '';
  var spacer_bot = '';
  
  if (typeof src === 'undefined') src = '';
  if (typeof bgcolor === 'undefined') bgcolor = '';
  if (typeof classes === 'undefined') classes = '';
  if (typeof imgwidth === 'undefined') imgwidth = '';
  if (typeof imgheight === 'undefined') imgheight = '';
  if (typeof top_padding === 'undefined') top_padding = '';
  if (typeof bottom_padding === 'undefined') bottom_padding = '';
  if (typeof fitcontent === 'undefined') fitcontent = '';

  if (fitcontent === 'true') {
    msofit = 'style="mso-fit-shape-to-text:true"';
  }

  if (top_padding.length > 0) {
    spacer_top = '<tr><td height="'+top_padding+'" style="height: '+top_padding+'px !important;"></td></tr>';
  }

  if (bottom_padding.length > 0) {
    spacer_bot = '<tr><td height="'+bottom_padding+'" style="height: '+bottom_padding+'px !important;"></td></tr>';
  }

  unitHeight = 'height: '+imgheight+'px;';

  var bg = '<table background="assets/img/hero-header.jpg" align="center" class="wrapper bf-bg '+classes+' float-center" border="0" cellpadding="0" cellspacing="0" width="100%">\
      <tr valign="top">\
        <td background="'+ src +'" bgcolor="'+ bgcolor +'" valign="top" align="center" style="text-align: center; background-position: center center !important; background-size: cover !important;">\
          <!--[if gte mso 9]>\
            <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:'+imgwidth+'px;'+unitHeight+' background-position: center center !important;">\
            <v:fill type="tile" src="'+ src +'" color="'+ bgcolor +'" />\
            <v:textbox '+msofit+' inset="0,0,0,0">\
          <![endif]-->\
          <div>\
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">'
              + spacer_top +
              '<tr valign="top">\
                <td valign="top">'
                  + options.fn(this) +
                '</td>\
              </tr>'
              + spacer_bot +
            '</table>\
          </div>\
          <!--[if gte mso 9]>\
          </v:textbox>\
          </v:rect>\
          <![endif]-->\
        </td>\
      </tr>\
      </table>';

  return bg;
}