/* ==========================================================================
   TRIỂN LÃM NGHỆ THUẬT NGÔN TỪ - CORE JAVASCRIPT
   Vanilla ES6, Editorial x Selective Glassmorphism
   ========================================================================== */

// 1. MOCK DATABASE (Dữ liệu thực tế cho 5 cung bậc cảm xúc)
const bookDatabase = [
  // --- Cảm xúc: hoi-hop ---
  {
    id: "hh-1",
    title: "Án mạng trên chuyến tàu tốc hành phương Đông",
    author: "Agatha Christie",
    emotion: "hoi-hop",
    badge: "Trinh thám Cổ điển",
    cover: "images/hoi-hop/an-mang-tren-chuyen-tau-toc-hanh-phuong-dong.webp",
    summary:
      "Giữa bão tuyết chia cắt đoàn tàu tốc hành với thế giới văn minh, một tội ác hoàn hảo đã được dàn dựng với mười hai nhát dao đầy thù hận. Hercule Poirot không chỉ đối mặt với một câu đố logic hóc búa, mà còn đứng trước lằn ranh mong manh giữa luật pháp trần thế và công lý của lương tri. 'Điều không thể đã xảy ra, vì vậy điều không thể ấy ắt phải là sự thật.'",
  },
  {
    id: "hh-2",
    title: "Bạch Dạ Hành",
    author: "Higashino Keigo",
    emotion: "hoi-hop",
    badge: "Tâm lý Tội phạm",
    cover: "images/hoi-hop/bach-da-hanh.jpg",
    summary:
      "Một khúc ca bi tráng và lạnh lẽo về hai linh hồn bước đi trong đêm trắng, nương tựa vào nhau bằng những tội ác không thể tha thứ. Từng trang sách siết chặt lồng ngực người đọc bằng bầu không khí ngột ngạt của sự truy đuổi kiên trì suốt mười chín năm ròng rã. 'Bầu trời của tôi không có mặt trời, luôn luôn là đêm đen, nhưng có thứ ánh sáng khác thay thế mặt trời.'",
  },
  {
    id: "hh-3",
    title: "Ghi chép pháp y",
    author: "Lưu Bát Bách",
    emotion: "hoi-hop",
    badge: "Hiện thực & Điều tra",
    cover: "images/hoi-hop/ghi-chep-phap-y.jpg",
    summary:
      "Dưới mũi dao giải phẫu sắc lạnh, người chết cất lên lời trần tình sau cùng về bản chất tăm tối và phức tạp khôn cùng của nhân tâm. Từng vụ án được bóc tách với độ chân thực đến rợn ngợp, biến mỗi trang viết thành cuộc đối thoại nghẹt thở giữa sự sống và sự diệt vong. 'Xương cốt và máu thịt không biết nói dối, chỉ có lòng người mới biết ngụy trang.'",
  },
  {
    id: "hh-4",
    title: "Phía sau nghi can X",
    author: "Higashino Keigo",
    emotion: "hoi-hop",
    badge: "Đấu trí & Tình yêu",
    cover: "images/hoi-hop/phia-sau-nghi-can-x.webp",
    summary:
      "Cuộc đối đầu vĩ đại giữa hai bộ óc thiên tài toán học và vật lý xoay quanh một chứng cứ ngoại phạm hoàn mỹ đến kinh ngạc. Ẩn sâu dưới lớp vỏ của một vụ án mạng rúng động là sự hy sinh tuyệt đối, thuần khiết đến mức bi thương của một kẻ si tình. 'Thiết lập một bài toán khó và giải một bài toán khó, việc nào khó hơn?'",
  },
  {
    id: "hh-5",
    title: "Sherlock Holmes",
    author: "Arthur Conan Doyle",
    emotion: "hoi-hop",
    badge: "Suy luận Cổ điển",
    cover: "images/hoi-hop/sherlock-holmes-1.webp",
    summary:
      "Thành London chìm trong sương mù dày đặc và những bí ẩn ma quái được rọi sáng bởi nhãn quan suy luận sắc như dao cạo của vị thám tử vĩ đại nhất lịch sử. Mỗi bước chân đuổi theo hung thủ trên phố Baker đều mang lại cảm giác phấn khích đến tột cùng cho trí tưởng tượng. 'Khi bạn đã loại trừ những điều không thể, thì những gì còn lại, dù khó tin đến đâu, vẫn là sự thật.'",
  },
  {
    id: "hh-6",
    title: "Sự im lặng của bầy cừu",
    author: "Thomas Harris",
    emotion: "hoi-hop",
    badge: "Kinh dị Tâm lý",
    cover: "images/hoi-hop/su-im-lang-cua-bay-cuu.webp",
    summary:
      "Một cuộc khiêu vũ tâm lý rùng rợn giữa nữ đặc vụ FBI tập sự Clarice Starling và bộ óc quỷ quyệt của bác sĩ ăn thịt người Hannibal Lecter. Nỗi sợ hãi len lỏi qua từng câu chữ, bóp nghẹt nhịp tim khi ranh giới giữa kẻ săn mồi và con mồi bị xóa nhòa. 'Tiếng kêu của bầy cừu non trong đêm tối đã ngừng lại chưa, Clarice?'",
  },
  {
    id: "hh-7",
    title: "Trại hoa đỏ",
    author: "Di Li",
    emotion: "hoi-hop",
    badge: "Trinh thám Huyền bí",
    cover: "images/hoi-hop/trai-hoa-do.webp",
    summary:
      "Vùng núi cao mù sương với thung lũng hoa đỏ rực rỡ trở thành mồ chôn cho những bí mật dòng họ truyền đời cùng hàng loạt cái chết ma mị, quái đản. Tác phẩm dệt nên một bầu không khí u uất, rợn người đậm chất văn hóa bản địa, đưa người đọc vào vòng xoáy hoài nghi không lối thoát. 'Hoa càng đỏ thắm, đất bên dưới càng nhuốm nhiều máu tanh.'",
  },
  {
    id: "hh-8",
    title: "Và rồi chẳng còn ai",
    author: "Agatha Christie",
    emotion: "hoi-hop",
    badge: "Mười Nhân vật & Một Hòn đảo",
    cover: "images/hoi-hop/va-roi-chang-con-ai.webp",
    summary:
      "Mười con người mang trong mình những tội lỗi chưa từng bị phán xét cùng tề tựu trên hòn đảo biệt lập, để rồi từng người gục ngã theo một bài đồng dao cổ quái. Cảm giác hồi hộp tột bực dâng trào khi nhận ra kẻ hành quyết vô hình lại đang ẩn náu ngay giữa những nạn nhân còn sống sót. 'Mười người da đen nhỏ đi ăn tối; một người bị nghẹn và thế là còn chín...'",
  },

  // --- Cảm xúc: choang-ngop ---
  {
    id: "cn-1",
    title: "Circe",
    author: "Madeline Miller",
    emotion: "choang-ngop",
    badge: "Thần thoại Hy Lạp",
    cover: "images/choang-ngop/circe.webp",
    summary:
      "Khúc tráng ca tái sinh đầy mê hoặc về nữ thần phù thủy cô độc giữa hòn đảo Aiaia hoang sơ và kỳ vĩ. Văn phong rực rỡ lộng lẫy thêu dệt nên một thần thoại cổ xưa nhưng mang hơi thở dữ dội của người phụ nữ tự mình rèn giũa quyền năng. 'Tôi sẽ không bao giờ để bất kỳ ai khác định đoạt số phận của mình nữa, dù là thần linh hay người phàm.'",
  },
  {
    id: "cn-2",
    title: "Harry Potter và Hòn đá Phù thủy",
    author: "J.K. Rowling",
    emotion: "choang-ngop",
    badge: "Giả tưởng Kỳ ảo",
    cover: "images/choang-ngop/harry-potter-va-hon-da-phu-thuy.webp",
    summary:
      "Cánh cổng dẫn vào tòa lâu đài Hogwarts cổ kính mở ra cả một vũ trụ kỳ diệu của phép thuật, tình bạn và lòng can đảm thuần khiết. Lần đầu tiên nhìn thấy Đại sảnh đường lung linh dưới hàng ngàn ngọn nến bay là khoảnh khắc kỳ quan thắp sáng tâm hồn của biết bao thế hệ độc giả. 'Thực sự cần rất nhiều lòng dũng cảm để chống lại kẻ thù, nhưng cần nhiều hơn thế để đứng lên trước bạn bè.'",
  },
  {
    id: "cn-3",
    title: "Lời nguyền của màn đêm",
    author: "Lupita Nyong'o",
    emotion: "choang-ngop",
    badge: "Cổ tích Hiện đại",
    cover: "images/choang-ngop/loi-nguyen-cua-man-dem.webp",
    summary:
      "Bức tranh huyền ảo đan dệt giữa những vì sao đêm thẳm và vẻ đẹp thuần túy của màu da mang sắc trời đêm vô tận. Tác phẩm tựa như một giấc mơ thị giác diệu kỳ, đưa tâm hồn người đọc phiêu lãng vào không gian vũ trụ bao la để chiêm ngưỡng ánh sáng nội tại. 'Khi đêm tối buông xuống, vũ trụ mới hé lộ những bí mật rực rỡ nhất của nó.'",
  },
  {
    id: "cn-4",
    title: "Lời thề tàn nhẫn",
    author: "Rebecca Ross",
    emotion: "choang-ngop",
    badge: "Sử thi Kỳ ảo",
    cover: "images/choang-ngop/loi-the-tan-nhan.webp",
    summary:
      "Chiến trường của các vị thần cổ đại rung chuyển dữ dội dưới ngòi bút miêu tả tráng lệ, nơi những lá thư thần diệu nối liền hai trái tim giữa khói lửa điêu tàn. Một thế giới vừa hoang tàn bi tráng vừa đong đầy thi vị nghệ thuật, làm choáng ngợp bất kỳ ai say mê sử thi lãng mạn. 'Chiến tranh có thể san bằng thành lũy, nhưng không thể chôn vùi lời hẹn ước khắc sâu vào linh hồn.'",
  },
  {
    id: "cn-5",
    title: "Quái vật Ickabog",
    author: "J.K. Rowling",
    emotion: "choang-ngop",
    badge: "Ngụ ngôn Cổ tích",
    cover: "images/choang-ngop/quai-vat-ickabog.webp",
    summary:
      "Từ vương quốc Cornucopia phồn vinh bậc nhất đến đầm lầy huyền bí nơi sinh vật huyền thoại Ickabog ẩn náu, câu chuyện mở ra thế giới ngụ ngôn đầy sắc màu và xúc cảm. Sự đối lập giữa lòng tham lam quyền lực và sự ngây thơ quả cảm của trẻ thơ tạo nên một thiên trường ca kỳ thú. 'Một huyền thoại được kể đủ nhiều lần sẽ trở thành sự thật trong tâm trí con người.'",
  },
  {
    id: "cn-6",
    title: "Tổng đài kể chuyện lúc 0h",
    author: "Nhiều tác giả",
    emotion: "choang-ngop",
    badge: "Huyền bí Đô thị",
    cover: "images/choang-ngop/tong-dai-ke-chuyen-luc-0h.webp",
    summary:
      "Khi kim đồng hồ điểm khắc chuyển giao ngày mới, những tần số kỳ bí phát đi muôn vàn mẩu chuyện siêu thực đan xen giữa hiện thực và ảo ảnh. Không gian đêm đặc quánh bỗng bừng nở những thế giới song song kỳ lạ, kích thích mọi giác quan người nghe trong tĩnh lặng. 'Lúc nửa đêm, ranh giới giữa những gì ta tưởng tượng và thực tại chỉ mỏng manh như một sợi chỉ.'",
  },
  {
    id: "cn-7",
    title: "Trại trẻ đặc biệt của cô Peregrine",
    author: "Ransom Riggs",
    emotion: "choang-ngop",
    badge: "Giả tưởng Hắc ám",
    cover: "images/choang-ngop/trai-tre-dac-biet-cua-co-peregrine.webp",
    summary:
      "Sự kết hợp độc nhất vô nhị giữa lời văn kỳ bí và những bức ảnh cổ điển ma mị đưa ta lạc vào vòng lặp thời gian trên một hòn đảo xa xôi ở xứ Wales. Nơi trú ẩn của những đứa trẻ mang dị năng phi thường vừa quyến rũ vừa ẩn chứa hiểm nguy khôn lường từ bóng tối. 'Chúng tôi gắn bó với thời gian này vì thế giới ngoài kia đã không còn chỗ cho những điều kỳ diệu.'",
  },
  {
    id: "cn-8",
    title: "Xứ sở miên man",
    author: "Jun Phạm",
    emotion: "choang-ngop",
    badge: "Cổ tích Giả tưởng",
    cover: "images/choang-ngop/xu-so-mien-man.webp",
    summary:
      "Một vùng đất huyền nhiệm được thêu dệt từ ký ức tuổi thơ, nơi những đồ vật cũ kỹ bỗng cất tiếng nói và đưa nhân vật chính vào chuyến phiêu lưu choáng ngợp sắc màu. Tác phẩm tựa như một cơn mưa ngọt lành tưới tắm những tâm hồn người lớn đã mỏi mệt trong thế giới thực tại. 'Đi qua bao nhiêu giông bão, xứ sở ấm áp nhất vẫn là nơi trái tim ta còn giữ lại sự ngây thơ.'",
  },

  // --- Cảm xúc: ngot-ngat ---
  {
    id: "nn-1",
    title: "Cô hầu gái",
    author: "Freida McFadden",
    emotion: "ngot-ngat",
    badge: "Giật gân Tâm lý",
    cover: "images/ngot-ngat/co-hau-gai.webp",
    summary:
      "Căn phòng gác mái chật hẹp chỉ có thể khóa từ bên ngoài của gia đình Winchester chứa đựng những bí mật khiến không khí trong nhà trở nên đặc quánh, bức bối. Từng ngày trôi qua là một cuộc rình rập nghẹt thở, nơi sự thật xoay chiều chóng mặt sau mỗi cánh cửa đóng kín. 'Đừng bao giờ đánh giá thấp một kẻ đang đứng ở đáy vực sâu không còn gì để mất.'",
  },
  {
    id: "nn-2",
    title: "Đêm trước đông chí",
    author: "Tư Dược",
    emotion: "ngot-ngat",
    badge: "Hiện thực Đen tối",
    cover: "images/ngot-ngat/dem-truoc-dong-tri.jpg",
    summary:
      "Cái lạnh buốt giá của mùa đông không tê tái bằng sự băng giá trong tâm hồn những con người bị giam hãm trong vòng xoáy thù hận và bế tắc luân thường. Nhịp điệu dồn dập, bức bối như chiếc thòng lọng vô hình siết chặt lấy từng số phận lầm lỡ trước ngưỡng cửa ánh sáng. 'Bóng tối trước ngày đông chí dài dằng dặc, như thể mặt trời sẽ không bao giờ mọc lại nữa.'",
  },
  {
    id: "nn-3",
    title: "Đừng bao giờ nói dối",
    author: "Freida McFadden",
    emotion: "ngot-ngat",
    badge: "Tâm lý Bế tắc",
    cover: "images/ngot-ngat/dung-bao-gio-noi-doi.webp",
    summary:
      "Bão tuyết cô lập một cặp vợ chồng trẻ trong ngôi biệt thự cũ từng thuộc về một bác sĩ tâm thần bị mất tích đầy bí ẩn. Những cuộn băng ghi âm bệnh nhân được bật lên giữa bóng tối mang theo những lời thú tội rùng mình, biến không gian thành một nhà tù nghẹt thở. 'Một lời nói dối có thể cứu rỗi bạn hôm nay, nhưng sẽ chôn vùi bạn vào ngày mai.'",
  },
  {
    id: "nn-4",
    title: "Kẻ nhắc tuồng",
    author: "Donato Carrisi",
    emotion: "ngot-ngat",
    badge: "Hình sự Ý",
    cover: "images/ngot-ngat/ke-nhac-tuong.webp",
    summary:
      "Một kẻ sát nhân thiên tài ẩn mình trong bóng tối, thao túng tâm lý những kẻ thủ ác khác như một người nhắc tuồng trong nhà hát của quỷ dữ. Bầu không khí ẩm ướt, nhớp nhúa và sự bất lực đến nghẹt thở của đội điều tra trước những cái bẫy tinh vi sẽ bám riết lấy tâm trí độc giả. 'Cái ác không cần sáng tạo, nó chỉ cần chờ đợi thời điểm lòng tốt bị lung lay.'",
  },
  {
    id: "nn-5",
    title: "Khúc ca chuộc tội",
    author: "Miêu Phi",
    emotion: "ngot-ngat",
    badge: "Tội ác & Đạo đức",
    cover: "images/ngot-ngat/khuc-ca-chuoc-toi.webp",
    summary:
      "Tiếng chuông sám hối vang lên muộn màng trong một câu chuyện đầy rẫy sự ngột ngạt của định kiến xã hội và những tội lỗi bị chôn giấu dưới đáy vực. Mối quan hệ giằng xé giữa các nhân vật phơi bày trần trụi những góc khuất tàn nhẫn nhất của sự trừng phạt và chuộc tội. 'Có những lỗi lầm dù lấy cả sinh mệnh ra đền đáp cũng không đổi lại được sự bình yên.'",
  },
  {
    id: "nn-6",
    title: "Người ếch",
    author: "Shichiri Nakayama",
    emotion: "ngot-ngat",
    badge: "Án mạng Liên hoàn",
    cover: "images/ngot-ngat/nguoi-ech.jpg",
    summary:
      "Nỗi hoảng loạn tột độ bao trùm cả thành phố khi những thi thể bị sát hại dã man kèm theo những mẩu giấy viết nguệch ngoạc tựa như trò chơi giết ếch của trẻ nhỏ. Sự giằng xé tàn nhẫn quanh Điều 39 Bộ luật Hình sự tạo nên một áp lực đè nặng lên lương tâm và công lý xã hội. 'Khi công lý bị trói buộc bởi những điều luật vô cảm, nỗi sợ sẽ biến mọi người thành quái vật.'",
  },
  {
    id: "nn-7",
    title: "Verity",
    author: "Colleen Hoover",
    emotion: "ngot-ngat",
    badge: "Bí mật Bị chôn vùi",
    cover: "images/ngot-ngat/verity-bi-mat-bi-chon-vui.webp",
    summary:
      "Bản thảo hồi ký chưa xuất bản của một nữ văn sĩ bị bại não hé lộ những sự thật kinh hoàng về cái chết của hai đứa con gái thơ ngây. Một bầu không khí u ám, đồi bại và nghẹt thở bao trùm từng ngóc ngách của căn nhà, đẩy người đọc vào trạng thái nghi hoặc đến tột độ. 'Thế giới này không có quái vật dưới gầm giường, chúng sống ngay trong suy nghĩ của chúng ta.'",
  },
  {
    id: "nn-8",
    title: "Vụ ám sát ông Roger Ackroyd",
    author: "Agatha Christie",
    emotion: "ngot-ngat",
    badge: "Cú ngoặt Kinh điển",
    cover: "images/ngot-ngat/vu-am-sat-ong-roger-ackroyd.webp",
    summary:
      "Một ngôi làng yên bình ở vùng nông thôn nước Anh bỗng trở nên ngột ngạt khi vụ tống tiền và mạng sống của vị điền chủ giàu có bị tước đoạt trong thư phòng kín. Cú lật ngược tình thế chấn động lịch sử văn học trinh thám sẽ khiến người đọc sững sờ nhận ra mình đã bị đánh lừa tinh vi ra sao. 'Sự thật là thứ duy nhất tồn tại sau khi mọi lời dối trá đã tự tiêu diệt lẫn nhau.'",
  },

  // --- Cảm xúc: thau-cam ---
  {
    id: "tc-1",
    title: "Anne tóc đỏ dưới chái nhà xanh",
    author: "L.M. Montgomery",
    emotion: "thau-cam",
    badge: "Tâm hồn Trong trẻo",
    cover: "images/thau-cam/anne-toc-do-duoi-chai-nha-xanh.webp",
    summary:
      "Cô bé mồ côi Anne Shirley với mái tóc đỏ rực và trí tưởng tượng vô biên đã thắp sáng căn nhà xanh tĩnh lặng của hai anh em luống tuổi làng Avonlea. Tác phẩm là bài ca thấu cảm dịu dàng về tình yêu thương, sự bao dung và niềm tin yêu cuộc sống tha thiết. 'Không phải những ngày tháng hoàn hảo làm nên hạnh phúc, mà là khả năng tìm thấy niềm vui trong những điều giản đơn.'",
  },
  {
    id: "tc-2",
    title: "Bắt trẻ đồng xanh",
    author: "J.D. Salinger",
    emotion: "thau-cam",
    badge: "Nổi loạn Tuổi trẻ",
    cover: "images/thau-cam/bat-tre-dong-xanh.webp",
    summary:
      "Tiếng lòng cô đơn, chán chường nhưng chất chứa khao khát bảo vệ sự thuần khiết của cậu thiếu niên Holden Caulfield giữa một thế giới người lớn giả tạo. Cuốn sách chạm sâu vào những góc khuất yếu đuối nhất của tuổi trưởng thành, nơi ai cũng từng muốn làm người đứng giữ cánh đồng xanh. 'Tôi chỉ muốn đứng ở rìa vực thẳm và đỡ lấy những đứa trẻ đang mải chơi đùa không để ý bước chân.'",
  },
  {
    id: "tc-3",
    title: "Cây cam ngọt của tôi",
    author: "José Mauro de Vasconcelos",
    emotion: "thau-cam",
    badge: "Nỗi đau Trưởng thành",
    cover: "images/thau-cam/cay-cam-ngot-cua-toi.webp",
    summary:
      "Thế giới tuổi thơ nghèo khó của cậu bé Zezé với tâm hồn nhạy cảm phi thường và người bạn tri kỷ là gốc cam ngọt nơi góc vườn. Nỗi đau xé lòng khi phải đối mặt với sự mất mát đã dạy cho đứa trẻ hiểu được cái giá buốt giá của việc lớn lên. 'Tại sao người ta lại phải nói cho trẻ con biết những điều tàn nhẫn đến thế khi chúng còn quá nhỏ?'",
  },
  {
    id: "tc-4",
    title: "Chiến binh cầu vồng",
    author: "Andrea Hirata",
    emotion: "thau-cam",
    badge: "Nghị lực Tri thức",
    cover: "images/thau-cam/chien-binh-cau-vong.webp",
    summary:
      "Ngôi trường xập xệ trên hòn đảo Belitong nghèo nàn trở thành cái nôi nuôi dưỡng ước mơ phi thường của mười đứa trẻ cùng hai người thầy tận tụy. Tác phẩm truyền tải thông điệp thấu cảm sâu sắc về sức mạnh cứu rỗi của giáo dục và vẻ đẹp cao quý của nhân phẩm con người. 'Học tập không chỉ là con đường thoát nghèo, mà là cách chúng ta tôn trọng nhân phẩm của chính mình.'",
  },
  {
    id: "tc-5",
    title: "Chú bé mang pyjama sọc",
    author: "John Boyne",
    emotion: "thau-cam",
    badge: "Bi kịch Chiến tranh",
    cover: "images/thau-cam/chu-be-mang-pyjama-soc.jpg",
    summary:
      "Tình bạn ngây thơ vượt qua hàng rào dây thép gai giữa con trai một sĩ quan Đức Quốc xã và cậu bé Do Thái trong trại tập trung Auschwitz. Một câu chuyện làm tan nát trái tim bất kỳ ai, thức tỉnh lương tri nhân loại trước sự hủy diệt tàn bạo của thù hận chủng tộc. 'Một hàng rào có thể chia cắt hai thế giới, nhưng không thể ngăn hai tâm hồn tìm thấy sự đồng điệu.'",
  },
  {
    id: "tc-6",
    title: "Điều kỳ diệu của tiệm tạp hóa Namiya",
    author: "Higashino Keigo",
    emotion: "thau-cam",
    badge: "Chữa lành Nhân gian",
    cover: "images/thau-cam/dieu-ky-dieu-cua-tap-hoa-namiya.webp",
    summary:
      "Những lá thư gửi vượt thời gian qua khe cửa tiệm tạp hóa cũ kỹ đã hàn gắn những vết thương lòng và dẫn lối cho những mảnh đời lạc lối. Từng câu chuyện đan xen tinh tế minh chứng cho sự kỳ diệu của việc lắng nghe chân thành và lòng trắc ẩn giữa người với người. 'Bản đồ của bạn dẫu là một tờ giấy trắng, nhưng cũng có nghĩa bạn hoàn toàn tự do vẽ nên tương lai.'",
  },
  {
    id: "tc-7",
    title: "Người đàn ông mang tên Ove",
    author: "Fredrik Backman",
    emotion: "thau-cam",
    badge: "Ấm áp Tình người",
    cover: "images/thau-cam/nguoi-dan-ong-mang-ten-ove.webp",
    summary:
      "Đằng sau vẻ ngoài cáu kỉnh, nguyên tắc đến cổ hủ của ông lão Ove là một trái tim tan vỡ vì nhớ thương người vợ quá cố. Sự xuất hiện của những người hàng xóm ồn ào đã dần bóc tách lớp vỏ xù xì, để lộ một tâm hồn ấm áp đến rơi nước mắt. 'Yêu một người cũng giống như chuyển đến một ngôi nhà mới, ban đầu bạn thích nó vì sự mới mẻ, nhưng năm tháng qua đi bạn yêu nó vì những vết nứt.'",
  },
  {
    id: "tc-8",
    title: "Những tấm lòng cao cả",
    author: "Edmondo De Amicis",
    emotion: "thau-cam",
    badge: "Văn học Kinh điển",
    cover: "images/thau-cam/nhung-tam-long-cao-ca.webp",
    summary:
      "Cuốn nhật ký học trò của cậu bé Enrico ghi lại những bài học dung dị mà thấm thía về tình thầy trò, lòng hiếu thảo và sự trắc ẩn đối với những người kém may mắn. Những trang sách sống mãi cùng thời gian như tấm gương soi chiếu vẻ đẹp thánh thiện của đạo làm người. 'Lòng tốt là thứ ngôn ngữ mà người điếc có thể nghe và người mù có thể nhìn thấy.'",
  },
  {
    id: "tc-9",
    title: "Rừng Na Uy",
    author: "Haruki Murakami",
    emotion: "thau-cam",
    badge: "Nỗi buồn Tuổi trẻ",
    cover: "images/thau-cam/rung-nauy.webp",
    summary:
      "Khúc bi ca thanh xuân đượm buồn về tình yêu, nỗi mất mát và hành trình tìm kiếm điểm tựa linh hồn giữa Tokyo thập niên 60 đầy biến động. Tác phẩm đồng cảm sâu sắc với nỗi cô đơn cùng cực của những người trẻ tuổi đang loay hoay định vị cái tôi trước ranh giới sinh tử. 'Cái chết không phải là điều đối nghịch của sự sống, mà là một phần nằm ngay trong sự sống.'",
  },
  {
    id: "tc-10",
    title: "Trường ca Achilles",
    author: "Madeline Miller",
    emotion: "thau-cam",
    badge: "Sử thi & Tri kỷ",
    cover: "images/thau-cam/truong-ca-achilles.webp",
    summary:
      "Thiên tình sử bi tráng và xúc động giữa chiến binh huyền thoại Achilles và người bạn đồng hành trung trinh Patroclus dưới chân thành Troy rực lửa. Một khúc ca tôn vinh sự thấu hiểu tuyệt đối vượt qua định mệnh thần linh và sự tàn khốc của thời gian. 'Chàng là nửa linh hồn tôi, như các nhà thơ vẫn thường nói, và cái chết cũng không thể chia lìa.'",
  },
  {
    id: "tc-11",
    title: "Tuổi thơ dữ dội",
    author: "Phùng Quán",
    emotion: "thau-cam",
    badge: "Hào hùng Dân tộc",
    cover: "images/thau-cam/tuoi-tho-du-doi-1.jpg",
    summary:
      "Bản tráng ca bi hùng về những chiến sĩ thiếu niên của Trung đoàn Trần Cao Vân quả cảm chiến đấu và ngã xuống trên chiến trường Thừa Thiên - Huế. Nước mắt và lòng tự hào hòa quyện khi chứng kiến tâm hồn trong trắng, kiên trung của những đứa trẻ hiến dâng tuổi xuân cho Tổ quốc. 'Dù phải chết nghìn lần, chúng em cũng quyết không bao giờ phản bội quê hương.'",
  },

  // --- Cảm xúc: xao-xuyen ---
  {
    id: "xx-1",
    title: "Bảy người chồng của Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    emotion: "xao-xuyen",
    badge: "Hào quang Hollywood",
    cover: "images/xao-xuyen/bay-nguoi-chong-cua-evelyn-hugo.webp",
    summary:
      "Phía sau ánh đèn flash chói lòa và bảy cuộc hôn nhân gây chấn động Hollywood là một tình yêu thầm kín, khắc cốt ghi tâm kéo dài suốt đời của minh tinh Evelyn Hugo. Những thổ lộ chân thành bóc trần sự đánh đổi nghiệt ngã giữa danh vọng rực rỡ và hạnh phúc đích thực. 'Đừng bao giờ xin lỗi vì đã yêu ai đó bằng cả trái tim mình, dù người đó là ai đi chăng nữa.'",
  },
  {
    id: "xx-2",
    title: "Đồi gió hú",
    author: "Emily Brontë",
    emotion: "xao-xuyen",
    badge: "Tình yêu Hoang dại",
    cover: "images/xao-xuyen/doi-gio-hu.webp",
    summary:
      "Cơn lốc tình yêu mãnh liệt, cuồng bạo và nhuốm màu hủy diệt giữa Heathcliff và Catherine trên đồng hoang gió lộng xứ Yorkshire. Một kiệt tác bất hủ làm xao xuyến bao thế hệ bởi thứ tình cảm vượt qua giới hạn của trần thế và sự sống. 'Dù tâm hồn chúng tôi được làm bằng chất liệu gì, tâm hồn chàng và tôi đều cùng một loại.'",
  },
  {
    id: "xx-3",
    title: "Em sẽ đến cùng cơn mưa",
    author: "Takuji Ichikawa",
    emotion: "xao-xuyen",
    badge: "Lãng mạn Thuần khiết",
    cover: "images/xao-xuyen/em-se-den-cung-con-mua.webp",
    summary:
      "Lời hẹn ước dịu dàng của người mẹ quá cố trở về bên chồng con trong suốt sáu tuần mùa mưa rơi tí tách ngoài hiên cửa. Sự ấm áp, thuần khiết và nỗi luyến lưu nhẹ nhàng thấm sâu vào lòng độc giả như từng giọt mưa mùa hạ trong trẻo. 'Được gặp em, yêu em và có em trong đời là điều kỳ diệu nhất mà thượng đế đã ban tặng cho anh.'",
  },
  {
    id: "xx-4",
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    emotion: "xao-xuyen",
    badge: "Khí phách Phụ nữ",
    cover: "images/xao-xuyen/jane-eyre.webp",
    summary:
      "Hành trình khẳng định nhân phẩm, tự do và tình yêu mãnh liệt nhưng liêm khiết của cô gái mồ côi Jane Eyre tại dinh thự u uất Thornfield. Tình cảm sâu sắc giữa nàng và ngài Rochester là biểu tượng rực rỡ của sự đồng điệu giữa hai tâm hồn bình đẳng. 'Tôi không phải là một con chim; và không có chiếc bẫy nào có thể giam cầm được một linh hồn tự do.'",
  },
  {
    id: "xx-5",
    title: "Khi lỗi thuộc về các vì sao",
    author: "John Green",
    emotion: "xao-xuyen",
    badge: "Thanh xuân Dang dở",
    cover: "images/xao-xuyen/khi-loi-thuoc-ve-cac-vi-sao.webp",
    summary:
      "Mối tình nồng nhiệt, hóm hỉnh nhưng đẫm nước mắt giữa hai người trẻ tuổi mang trong mình căn bệnh ung thư quái ác. Họ đã gom góp những ngày ngắn ngủi còn lại để trao cho nhau một cõi vĩnh hằng thu nhỏ đầy ý nghĩa. 'Em đã trao cho anh một cõi vĩnh hằng chỉ trong những ngày hữu hạn, và anh mãi mãi biết ơn vì điều đó.'",
  },
  {
    id: "xx-6",
    title: "Kiêu hãnh và định kiến",
    author: "Jane Austen",
    emotion: "xao-xuyen",
    badge: "Cổ điển Hoàng gia",
    cover: "images/xao-xuyen/kieu-hanh-va-dinh-kien.webp",
    summary:
      "Vũ điệu tình yêu tinh tế, sắc sảo giữa nàng Elizabeth thông minh bướng bỉnh và chàng Darcy cao ngạo quyền quý vùng thôn dã nước Anh. Tác phẩm chinh phục trái tim độc giả qua những cuộc đối thoại trí tuệ và sự hóa giải ngọt ngào giữa lòng kiêu hãnh và những định kiến sai lầm. 'Em đã bỏ bùa mê cả thể xác lẫn tâm hồn tôi, và tôi yêu em, yêu em say đắm.'",
  },
  {
    id: "xx-7",
    title: "Mắt biếc",
    author: "Nguyễn Nhật Ánh",
    emotion: "xao-xuyen",
    badge: "Hoài niệm Quê hương",
    cover: "images/xao-xuyen/mat-biec.webp",
    summary:
      "Mối tình si trọn một đời của Ngạn dành cho Hà Lan dưới bóng râm của rừng sim và ngôi trường làng Đo Đo thơ mộng. Đôi mắt biếc trong veo như nỗi buồn thăm thẳm mang theo những tiếc nuối khôn nguôi về một thời thanh xuân đã lùi vào dĩ vãng. 'Tôi gửi tình yêu cho mùa hè, nhưng mùa hè không giữ; mùa hè nghiêng mình để tình yêu rơi vào mắt biếc.'",
  },
  {
    id: "xx-8",
    title: "Vợ của người du hành thời gian",
    author: "Audrey Niffenegger",
    emotion: "xao-xuyen",
    badge: "Vượt qua Thời gian",
    cover: "images/xao-xuyen/vo-cua-nguoi-du-hanh-thoi-gian.webp",
    summary:
      "Một câu chuyện tình phi thời gian kỳ lạ và da diết giữa Henry - người đàn ông bị dịch chuyển thời gian ngoài tầm kiểm soát, và Clare - người phụ nữ dành cả đời để kiên nhẫn đợi chờ anh. Tình yêu của họ trở thành chiếc mỏ neo duy nhất giữa dòng chảy hỗn loạn của năm tháng. 'Anh yêu em từ trước khi anh hiểu thế nào là tình yêu, và anh sẽ yêu em đến tận cùng của thời gian.'",
  },
];

// Khởi chạy khi DOM sẵn sàng
document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================================
     SECTION 3: DRAG TO SCROLL (EMOTION TRACK)
     ========================================================================== */
  const track = document.querySelector(".emotions-scroll-track");
  if (track) {
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    track.addEventListener("mousedown", (e) => {
      isDown = true;
      track.style.scrollSnapType = "none";
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });

    track.addEventListener("mouseleave", () => {
      if (!isDown) return;
      isDown = false;
      track.style.scrollSnapType = "x mandatory";
    });

    track.addEventListener("mouseup", () => {
      if (!isDown) return;
      isDown = false;
      track.style.scrollSnapType = "x mandatory";
    });

    track.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.5;
      track.scrollLeft = scrollLeft - walk;
    });
  }

  /* ==========================================================================
     SECTION 4: CORE VARIABLES & STATE MANAGEMENT
     ========================================================================== */
  const emotionCards = document.querySelectorAll(".emotion-card");
  const bookCards = document.querySelectorAll(".book-card");
  const shuffleBtn = document.querySelector(".btn-shuffle");
  const exploreSection = document.getElementById("exploration");

  const bookOverlay = document.querySelector(".book-overlay");
  const focusContainer = document.querySelector(".book-focus-container");
  const closeBtn = document.querySelector(".btn-close-focus");

  // Các phần tử bên trong Focus Modal
  const focusTitle = focusContainer
    ? focusContainer.querySelector(".focus-book-title")
    : null;
  const focusAuthor = focusContainer
    ? focusContainer.querySelector(".focus-book-author")
    : null;
  const focusBookCoverImg = focusContainer
    ? focusContainer.querySelector(".focus-book-cover img")
    : null;
  const detailTitle = focusContainer
    ? focusContainer.querySelector(".detail-title")
    : null;
  const detailAuthor = focusContainer
    ? focusContainer.querySelector(".detail-author")
    : null;
  const detailBadge = focusContainer
    ? focusContainer.querySelector(".detail-badge")
    : null;
  const detailSummary = focusContainer
    ? focusContainer.querySelector(".detail-summary")
    : null;
  const heartBtn = focusContainer
    ? focusContainer.querySelector(".btn-heart-modal")
    : null;

  // Trạng thái hiện tại
  let currentEmotion = "hoi-hop";
  if (emotionCards.length > 0 && emotionCards[0].dataset.emotion) {
    currentEmotion = emotionCards[0].dataset.emotion;
  }
  let currentDisplayedIds = []; // Lưu danh sách ID sách đang hiển thị
  let currentActiveBook = null; // Cuốn sách đang mở trong modal

  /* ==========================================================================
     SHUFFLE & RENDER LOGIC
     ========================================================================== */
  // Thuật toán xáo trộn mảng Fisher-Yates
  const shuffleArray = (arr) => {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  /**
   * Render 4 cuốn sách vào Grid theo cảm xúc hiện tại với Fallback lấp đầy
   */
  const renderBookGrid = () => {
    if (!bookCards.length) return;

    // 1. Lọc sách thuộc cảm xúc hiện tại
    const pool = bookDatabase.filter((b) => b.emotion === currentEmotion);
    if (!pool.length) return;

    // 2. Lấy các sách chưa xuất hiện ở lượt trước
    const unseenBooks = pool.filter((b) => !currentDisplayedIds.includes(b.id));

    let selectedBooks = [];

    if (unseenBooks.length >= 4) {
      // Đủ 4 cuốn mới tinh
      selectedBooks = shuffleArray(unseenBooks).slice(0, 4);
    } else {
      // 3. FALLBACK: Không đủ 4 cuốn chưa xuất hiện
      selectedBooks = [...unseenBooks];
      const needed = 4 - selectedBooks.length;

      // Lấy từ kho sách đã từng xuất hiện (trừ những cuốn vừa được bốc vào selectedBooks)
      const seenPool = pool.filter(
        (b) => !selectedBooks.some((sb) => sb.id === b.id),
      );
      const fillerBooks = shuffleArray(seenPool).slice(0, needed);
      selectedBooks = [...selectedBooks, ...fillerBooks];

      // Đảm bảo không trùng khít y hệt 4 cuốn của lượt vừa hiển thị
      const isIdentical =
        currentDisplayedIds.length === 4 &&
        selectedBooks.every((b) => currentDisplayedIds.includes(b.id));

      if (isIdentical && pool.length > 4) {
        // Hoán đổi nếu bị trùng nguyên vẹn
        selectedBooks = shuffleArray(pool).slice(0, 4);
      }
    }

    // Cập nhật danh sách ID đang hiển thị
    currentDisplayedIds = selectedBooks.map((b) => b.id);

    // 4. Đổ dữ liệu vào 4 thẻ .book-card tĩnh
    bookCards.forEach((card, index) => {
      const book = selectedBooks[index];
      if (!book) return;

      // Lưu trữ toàn bộ dữ liệu sách vào dataset để modal truy xuất
      card.dataset.id = book.id;
      card.dataset.index = index;
      card.dataset.title = book.title;
      card.dataset.author = book.author;
      card.dataset.cover = book.cover;
      card.dataset.badge = book.badge;
      card.dataset.summary = book.summary;

      // Cập nhật hiển thị bên ngoài thẻ
      const coverImg = card.querySelector(".book-cover img");
      if (coverImg) {
        coverImg.src = book.cover;
        coverImg.alt = `Bìa sách ${book.title}`;
      }

      const titleEl = card.querySelector(".book-title");
      if (titleEl) titleEl.textContent = book.title;

      const authorEl = card.querySelector(".book-author");
      if (authorEl) authorEl.textContent = book.author;

      // Cập nhật thẻ tóm tắt ẩn bên trong card
      const detailData = card.querySelector(".book-detail-data");
      if (detailData) {
        const dTitle = detailData.querySelector(".detail-title");
        if (dTitle) dTitle.textContent = book.title;
        const dAuthor = detailData.querySelector(".detail-author");
        if (dAuthor) dAuthor.textContent = `Tác giả: ${book.author}`;
        const dBadge = detailData.querySelector(".detail-badge");
        if (dBadge) dBadge.textContent = book.badge;
        const dSummary = detailData.querySelector(".detail-summary");
        if (dSummary) dSummary.textContent = book.summary;
      }
    });
  };

  /* ==========================================================================
     EVENT LISTENERS: LỌC CẢM XÚC & NÚT TRỘN
     ========================================================================== */
  // 1. Click vào Emotion Card
  emotionCards.forEach((card) => {
    card.addEventListener("click", () => {
      const emotion = card.dataset.emotion;
      if (!emotion) return;

      currentEmotion = emotion;
      currentDisplayedIds = []; // Reset để lượt đầu của cảm xúc mới bốc tươi mới
      renderBookGrid();

      // Cuộn mượt xuống không gian khám phá
      if (exploreSection) {
        exploreSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 2. Click vào Nút Trộn Sách
  if (shuffleBtn) {
    shuffleBtn.addEventListener("click", () => {
      renderBookGrid();
    });
  }

  /* ==========================================================================
     SECTION 4: FOCUS MODAL & FAVORITE HEART LOGIC
     ========================================================================== */
  // Cập nhật giao diện trái tim trong Modal theo localStorage
  const updateModalHeartUI = (bookId) => {
    if (!heartBtn) return;
    try {
      const raw = localStorage.getItem("favoriteBooks");
      const favs = raw ? JSON.parse(raw) : [];
      const isFav = favs.some((b) => String(b.id) === String(bookId));
      if (isFav) {
        heartBtn.classList.add("is-loved");
        heartBtn.setAttribute("aria-pressed", "true");
      } else {
        heartBtn.classList.remove("is-loved");
        heartBtn.setAttribute("aria-pressed", "false");
      }
    } catch (err) {
      console.error("Lỗi đọc favoriteBooks:", err);
    }
  };

  // Đóng Modal
  const closeFocus = () => {
    if (!focusContainer || !bookOverlay) return;
    focusContainer.classList.remove("is-active");
    bookOverlay.classList.remove("is-active");
    bookCards.forEach((c) => c.classList.remove("is-active"));
    document.body.style.overflow = "";
    currentActiveBook = null;
  };

  // Mở Modal Focus chi tiết
  const openFocus = (card) => {
    if (!focusContainer || !bookOverlay) return;

    // Trích xuất dữ liệu từ dataset của card
    const id = card.dataset.id || card.dataset.index || "0";
    const title =
      card.dataset.title ||
      card.querySelector(".book-title")?.textContent ||
      "Tác phẩm";
    const author =
      card.dataset.author ||
      card.querySelector(".book-author")?.textContent ||
      "Tác giả";
    const badge = card.dataset.badge || "Kỳ quan Văn học";
    const summary =
      card.dataset.summary ||
      card.querySelector(".book-detail-data .detail-summary")?.textContent ||
      "";
    const cover =
      card.dataset.cover ||
      card.querySelector(".book-cover img")?.getAttribute("src") ||
      "";

    currentActiveBook = { id, title, author, badge, summary, cover };

    // Đổ dữ liệu vào CỘT PHẢI
    if (detailTitle) detailTitle.textContent = title;
    if (detailAuthor) detailAuthor.textContent = `Tác giả: ${author}`;
    if (detailBadge) detailBadge.textContent = badge;
    if (detailSummary) detailSummary.textContent = summary;

    // Đổ dữ liệu vào CỘT TRÁI
    if (focusTitle) focusTitle.textContent = title;
    if (focusAuthor) focusAuthor.textContent = author;
    if (focusBookCoverImg) {
      focusBookCoverImg.src = cover;
      focusBookCoverImg.alt = `Bìa sách ${title}`;
    }

    // Kiểm tra và cập nhật trạng thái tim
    updateModalHeartUI(id);

    // Lưu vào Lịch sử Xem sách (Read History)
    addToHistory(card);

    // Kích hoạt hiển thị Modal
    bookCards.forEach((c) => c.classList.remove("is-active"));
    card.classList.add("is-active");
    bookOverlay.classList.add("is-active");
    focusContainer.classList.add("is-active");
    document.body.style.overflow = "hidden";
  };

  // Click vào thẻ sách để mở Modal
  bookCards.forEach((card) => {
    card.addEventListener("click", () => {
      openFocus(card);
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openFocus(card);
      }
    });
  });

  // Tương tác Thả tim trong Modal
  if (heartBtn) {
    heartBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!currentActiveBook) return;

      try {
        const raw = localStorage.getItem("favoriteBooks");
        let favs = raw ? JSON.parse(raw) : [];
        const idx = favs.findIndex(
          (b) => String(b.id) === String(currentActiveBook.id),
        );

        if (idx !== -1) {
          // Đã có -> Bỏ yêu thích
          favs.splice(idx, 1);
          heartBtn.classList.remove("is-loved");
          heartBtn.setAttribute("aria-pressed", "false");
        } else {
          // Chưa có -> Thêm yêu thích
          favs.push(currentActiveBook);
          heartBtn.classList.add("is-loved");
          heartBtn.setAttribute("aria-pressed", "true");
        }

        localStorage.setItem("favoriteBooks", JSON.stringify(favs));
      } catch (err) {
        console.error("Lỗi cập nhật favoriteBooks:", err);
      }
    });
  }

  // Đóng Modal khi click overlay, nút X, hoặc phím Escape
  if (bookOverlay) {
    bookOverlay.addEventListener("click", closeFocus);
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeFocus();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      focusContainer &&
      focusContainer.classList.contains("is-active")
    ) {
      closeFocus();
    }
  });

  /* ==========================================================================
     AUTH STATE CHECK (LOCALSTORAGE)
     ========================================================================== */
  function checkAuthState() {
    const loginBtn = document.getElementById("nav-login-btn");
    const avatarLink = document.getElementById("nav-user-avatar");
    const avatarInitial = avatarLink
      ? avatarLink.querySelector(".avatar-initial")
      : null;

    if (!loginBtn || !avatarLink) return;

    try {
      const stored = localStorage.getItem("currentUser");
      if (!stored) {
        loginBtn.style.display = "inline-block";
        avatarLink.style.display = "none";
        return;
      }

      const currentUser = JSON.parse(stored);
      const name =
        (currentUser && (currentUser.name || currentUser.username)) || "";
      const initial = name.trim().charAt(0).toUpperCase() || "?";

      if (avatarInitial) {
        avatarInitial.textContent = initial;
      }

      loginBtn.style.display = "none";
      avatarLink.style.display = "flex";
    } catch (err) {
      console.error("Lỗi parse currentUser:", err);
      loginBtn.style.display = "inline-block";
      avatarLink.style.display = "none";
    }
  }

  // Khởi chạy giao diện ban đầu
  checkAuthState();
  renderBookGrid(); // Render 4 cuốn sách đầu tiên của cảm xúc mặc định

  /* ==========================================================================
     AOS ANIMATION & GLOBAL BACKGROUND SCROLL EFFECT
     ========================================================================== */
  // 1. Khởi hoạt thư viện AOS (Animate On Scroll)
  if (typeof AOS !== "undefined") {
    AOS.init({
      once: true,
      offset: 100,
      duration: 1200,
      easing: "ease-in-out",
    });
  }

  // 2. Hiệu ứng đổi màu nền toàn cục theo độ cuộn chuột (Scroll Background Overlay)
  const bgOverlay = document.getElementById("scroll-bg-overlay");
  if (bgOverlay) {
    const handleScrollBg = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;

      let scrollPercent = window.scrollY / scrollableHeight;
      // Giới hạn tỷ lệ từ 0 đến 1
      scrollPercent = Math.max(0, Math.min(1, scrollPercent));

      bgOverlay.style.opacity = scrollPercent;
    };

    window.addEventListener("scroll", handleScrollBg, { passive: true });
    handleScrollBg(); // Gọi ngay lần đầu tiên để đồng bộ vị trí hiện tại
  }
});

/* ==========================================================================
   READ HISTORY HELPER (GLOBAL FUNCTION)
   ========================================================================== */
function addToHistory(bookCardElement) {
  if (!bookCardElement) return;

  const id =
    bookCardElement.dataset.id ||
    bookCardElement.dataset.index ||
    "book-" + Date.now();

  const title =
    bookCardElement.dataset.title ||
    bookCardElement.querySelector(".book-title")?.textContent?.trim() ||
    "Tác phẩm";
  const author =
    bookCardElement.dataset.author ||
    bookCardElement.querySelector(".book-author")?.textContent?.trim() ||
    "Khuyết danh";
  const coverImg = bookCardElement.querySelector(".book-cover img");
  const cover =
    bookCardElement.dataset.cover ||
    (coverImg ? coverImg.getAttribute("src") : "");

  const bookObj = { id, title, author, cover };

  try {
    const rawHistory = localStorage.getItem("readHistory");
    let history = rawHistory ? JSON.parse(rawHistory) : [];

    // Loại bỏ bản ghi cũ nếu đã có
    history = history.filter((item) => String(item.id) !== String(bookObj.id));

    // Đẩy sách mới xem lên đầu
    history.unshift(bookObj);

    // Cắt mảng tối đa 12 cuốn gần nhất
    const limitedHistory = history.slice(0, 12);
    localStorage.setItem("readHistory", JSON.stringify(limitedHistory));
  } catch (error) {
    console.error("Lỗi khi cập nhật readHistory:", error);
  }
}
