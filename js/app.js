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
      "Đêm mùa đông buốt giá băng qua bán đảo Balkan, chuyến tàu sang trọng phương Đông bất ngờ bị bão tuyết cô lập giữa vùng hoang dã. Khi bình minh lên, triệu phú người Mỹ Samuel Ratchett được phát hiện đã chết trong khoang kín với mười hai nhát dao kỳ lạ mang nhiều góc độ và lực đâm khác nhau.\n\nHercule Poirot bước vào cuộc thẩm vấn mười hai hành khách với những xuất thân, quốc tịch và giai tầng hoàn toàn khác biệt. Tuy nhiên, mọi bằng chứng ngoại phạm đều hoàn hảo đến mức đáng ngờ, tựa như một vở kịch được chuẩn bị tỉ mỉ đến từng chi tiết.\n\nCàng đào sâu vào quá khứ, Poirot càng nhận ra vụ án mạng không đơn thuần là một cuộc thanh toán tư thù, mà là tiếng vọng đau thương từ một bi kịch bắt cóc trẻ em rúng động nhiều năm về trước.\n\n❓ Mấu chốt bí ẩn chờ bạn khám phá trong sách: Liệu kẻ thủ ác là một bóng ma đột nhập từ bên ngoài, hay chính mười hai con người trên tàu đều đang che giấu một bí mật chung? Và khi luật pháp trần thế bất lực, công lý đích thực sẽ thuộc về ai?",
  },
  {
    id: "hh-2",
    title: "Bạch Dạ Hành",
    author: "Higashino Keigo",
    emotion: "hoi-hop",
    badge: "Tâm lý Tội phạm",
    cover: "images/hoi-hop/bach-da-hanh.jpg",
    summary:
      "Khởi đầu từ cái chết bí ẩn của một người đàn ông tại công trường bỏ hoang ở Osaka năm 1973, vụ án nhanh chóng đi vào ngõ cụt khi nghi can số một cũng đột ngột qua đời trong một tai nạn đáng ngờ.\n\nVụ án khép lại nhưng bóng tối của nó kéo dài suốt mười chín năm, âm thầm bao phủ lấy cuộc đời của hai đứa trẻ: Ryo - con trai nạn nhân, và Yukiho - con gái nghi can. Hai con người tưởng chừng như hai đường thẳng song song, không hề quen biết, nhưng bất kỳ ai cản đường họ đều lần lượt gặp phải những bất hạnh kinh hoàng.\n\nBằng sự kiên trì bền bỉ đến kiệt cùng của viên cảnh sát già Sasagaki, bức màn che đậy mối liên kết nghiệt ngã giữa hai tâm hồn cô độc bước đi dưới ánh sáng ban ngày giả tạo dần được kéo mở.\n\n❓ Mấu chốt bí ẩn chờ bạn khám phá trong sách: Liệu tội ác kinh hoàng có thể sinh ra từ một tình yêu thuần khiết? Và bóng đêm trắng sẽ dẫn lối hai linh hồn ấy về miền cứu rỗi hay đẩy họ xuống vực sâu vĩnh viễn?",
  },
  {
    id: "hh-3",
    title: "Ghi chép pháp y",
    author: "Lưu Bát Bách",
    emotion: "hoi-hop",
    badge: "Hiện thực & Điều tra",
    cover: "images/hoi-hop/ghi-chep-phap-y.jpg",
    summary:
      "Đằng sau cánh cửa phòng giải phẫu lạnh lẽo là nơi những thi thể bất động cất lên lời trần tình sau cùng. Từng vụ án mạng rùng rợn, từ xác chết không đầu trong bể nước, thi thể đóng băng trong tủ lạnh đến những hiện trường bị xáo trộn tinh vi đều được phơi bày dưới nhãn quan sắc bén của một bác sĩ pháp y dạn dày kinh nghiệm.\n\nCuốn sách dẫn dắt người đọc lần theo từng dấu vết vi mô: vết hoen tử thi, cặn đất dưới móng tay, độc chất trong dịch mô để tái hiện lại giây phút kinh hoàng của nạn nhân trước khi trút hơi thở cuối cùng.\n\nMỗi vụ án được làm sáng tỏ là một lần đạo đức và nhân tính bị đặt lên bàn cân thử thách, vạch trần những góc khuất tăm tối và biến dị nhất trong tâm lý con người giữa xã hội hiện đại.\n\n❓ Mấu chốt bí ẩn chờ bạn khám phá trong sách: Xương cốt và máu thịt không bao giờ biết nói dối, nhưng liệu khoa học pháp y có thể soi tỏ được những mưu mô hiểm độc sâu kín nhất của lòng người?",
  },
  {
    id: "hh-4",
    title: "Phía sau nghi can X",
    author: "Higashino Keigo",
    emotion: "hoi-hop",
    badge: "Đấu trí & Tình yêu",
    cover: "images/hoi-hop/phia-sau-nghi-can-x.webp",
    summary:
      "Khi Yasuko lỡ tay giết chết gã chồng cũ độc ác để tự vệ và bảo vệ đứa con gái nhỏ, cô nghĩ cuộc đời mình đã hoàn toàn chấm dứt. Đúng lúc ấy, người hàng xóm ít nói - thầy giáo dạy toán thiên tài Ishigami - đã bất ngờ xuất hiện và đề nghị giúp đỡ hai mẹ con thiết lập một hiện trường giả hoàn mỹ.\n\nMột cuộc đối đầu cân não đỉnh cao diễn ra giữa viên cảnh sát Kusanagi cùng giáo sư vật lý thiên tài Yukawa với bộ óc toán học siêu việt của Ishigami. Mọi giả thuyết điều tra, mọi cuộc kiểm tra ngoại phạm đều bị vô hiệu hóa trước mạng lưới logic toán học không tì vết.\n\nKhi bức màn che đậy dần hạ xuống, Yukawa kinh hoàng nhận ra chân lý đằng sau bài toán ngoại phạm: Ishigami không chỉ giải một bài toán, mà anh đã đặt cược cả sinh mạng và danh dự vào một sự hy sinh tột cùng của tình yêu thầm lặng.\n\n❓ Mấu chốt bí ẩn chờ bạn khám phá trong sách: Giữa việc tạo ra một bài toán hóc búa và giải bài toán ấy, điều nào khó khăn hơn? Và một người có thể vì tình yêu mà đi xa đến đâu trên con đường tự hủy diệt?",
  },
  {
    id: "hh-5",
    title: "Sherlock Holmes",
    author: "Arthur Conan Doyle",
    emotion: "hoi-hop",
    badge: "Suy luận Cổ điển",
    cover: "images/hoi-hop/sherlock-holmes-1.webp",
    summary:
      "Thành London thế kỷ 19 chìm trong sương mù dày đặc, nơi những con hẻm lầy lội và những dinh thự quý tộc cổ kính ẩn chứa vô số tội ác tinh vi và những bí mật gia tộc đen tối.\n\nTừ căn phòng số 221B phố Baker, vị thám tử lập dị Sherlock Holmes cùng người bạn đồng hành trung thành - bác sĩ Watson - bước vào những cuộc điều tra ly kỳ vượt xa trí tưởng tượng của cảnh sát Scotland Yard. Nhờ phép suy luận quy nạp độc nhất vô nhị, từng tàn thuốc, vết bùn hay sợi chỉ mỏng manh đều trở thành bằng chứng thép vạch mặt thủ phạm.\n\nNhững vụ án ngày càng trở nên phức tạp, đỉnh điểm là cuộc chạm trán định mệnh giữa Holmes và giáo sư Moriarty - kẻ thao túng toàn bộ thế giới ngầm châu Âu.\n\n❓ Mấu chốt bí ẩn chờ bạn khám phá trong sách: Khi bạn đã loại trừ tất cả những điều không thể, liệu điều còn lại, dù khó tin đến đâu, có thực sự là chân lý duy nhất?",
  },
  {
    id: "hh-6",
    title: "Sự im lặng của bầy cừu",
    author: "Thomas Harris",
    emotion: "hoi-hop",
    badge: "Kinh dị Tâm lý",
    cover: "images/hoi-hop/su-im-lang-cua-bay-cuu.webp",
    summary:
      "Nước Mỹ rúng động trước hàng loạt vụ sát hại phụ nữ dã man của tên giết người hàng loạt mang biệt danh Buffalo Bill. Trong cơn bế tắc tột cùng, FBI buộc phải cử nữ thực tập sinh Clarice Starling đến tìm kiếm sự giúp đỡ từ một kẻ sát nhân bệnh hoạn đang bị giam cầm: Tiến sĩ tâm thần học Hannibal Lecter.\n\nCuộc gặp gỡ giữa Clarice và Hannibal trở thành một ván cờ tâm lý rùng rợn theo nguyên tắc trao đổi sòng phẳng. Hannibal ban phát từng manh mối vụ án nhỏ giọt để đổi lấy những ký ức tổn thương tuổi thơ sâu kín nhất của Clarice về tiếng kêu thảm thiết của bầy cừu non trước giờ bị giết mổ.\n\nMột cuộc chạy đua nghẹt thở với thời gian khi con gái của một thượng nghị sĩ bị bắt cóc, trong khi Hannibal chuẩn bị cho một kế hoạch đào tẩu kinh hoàng khiến cả hệ thống an ninh sững sờ.\n\n❓ Mấu chốt bí ẩn chờ bạn khám phá trong sách: Liệu Clarice có thể giải cứu con tin trước khi tiếng kêu của bầy cừu trong tâm trí cô dứt hẳn, hay chính cô sẽ trở thành con mồi tiếp theo trong trò chơi quỷ quyệt của Hannibal?",
  },
  {
    id: "hh-7",
    title: "Trại hoa đỏ",
    author: "Di Li",
    emotion: "hoi-hop",
    badge: "Trinh thám Huyền bí",
    cover: "images/hoi-hop/trai-hoa-do.webp",
    summary:
      "Giữa núi rừng Tây Bắc hoang vu và sương mù bao phủ, doanh nhân Lưu cùng người yêu Trang tìm đến một trang trại tách biệt với thung lũng ngập tràn hoa đỏ rực rỡ để nghỉ dưỡng và xúc tiến dự án sinh thái.\n\nBầu không khí bình yên nhanh chóng bị xé toạc bởi hàng loạt hiện tượng ma quái và những cái chết ghê rợn liên tiếp xảy ra. Những xác chết trôi sông, bóng người thoắt ẩn thoắt hiện trong đêm tối cùng những lời nguyền truyền đời của người bản địa tạo nên một cơn ác mộng kinh hoàng.\n\nCảnh sát Phan bước vào cuộc điều tra giữa muôn vàn nghi hoặc, nơi ranh giới giữa những truyền thuyết tâm linh ma mị và âm mưu tội ác tàn nhẫn của con người bị xóa nhòa.\n\n❓ Mấu chốt bí ẩn chờ bạn khám phá trong sách: Màu hoa đỏ thắm nơi thung lũng là vẻ đẹp hoang sơ của thiên nhiên hay được nuôi dưỡng bằng máu của những oan hồn mang mối hận thù truyền kiếp?",
  },
  {
    id: "hh-8",
    title: "Và rồi chẳng còn ai",
    author: "Agatha Christie",
    emotion: "hoi-hop",
    badge: "Mười Nhân vật & Một Hòn đảo",
    cover: "images/hoi-hop/va-roi-chang-con-ai.webp",
    summary:
      "Mười con người mang xuất thân, tính cách và địa vị hoàn toàn khác nhau cùng nhận được lời mời bí ẩn đến nghỉ dưỡng tại hòn đảo Chiến Binh biệt lập ngoài khơi bờ biển Devon.\n\nKhi bữa tối vừa bắt đầu, một chiếc đĩa than tự động phát lên lời vạch trần tội ác giết người chưa từng bị pháp luật trừng phạt của từng vị khách. Ngay sau đó, lần lượt từng người bị sát hại theo đúng những chi tiết rùng rợn trong bài đồng dao cổ về mười người lính nhỏ treo trên tường.\n\nHòn đảo hoàn toàn bị cô lập giữa giông bão, không có lối thoát và cũng không có bất kỳ ai khác ẩn nấp. Nỗi nghi ngờ biến thành sự hoảng loạn tột độ khi họ nhận ra kẻ hành quyết vô hình chính là một trong số những người đang ngồi cùng bàn ăn.\n\n❓ Mấu chốt bí ẩn chờ bạn khám phá trong sách: Khi từng người gục ngã và chẳng còn ai sống sót trên đảo, bàn tay công lý vô hình nào đã dàn dựng nên vụ hành quyết hoàn hảo bậc nhất lịch sử văn học này?",
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
      "Sinh ra trong cung điện rực rỡ của thần Mặt Trời Helios, nàng tiên nữ Circe bị gia đình thần linh khinh miệt và hắt hủi vì ngoại hình tầm thường và giọng nói kỳ dị tựa người phàm trần.\n\nSau khi phát hiện ra quyền năng cấm kỵ của thảo dược phù thủy, Circe bị đày ải đến hòn đảo Aiaia hoang vu. Tại đây, giữa rừng sâu và bầy thú dữ, nàng tự mình mài giũa pháp thuật, đối mặt với những quái vật biển cả, thần linh ngạo mạn và những anh hùng kiêu hãnh của thần thoại Hy Lạp như Odysseus và Daedalus.\n\nĐứng giữa quyền năng bất tử vô cảm của thần linh và sự mong manh nhưng ngập tràn yêu thương của kiếp người phàm trần, Circe phải đưa ra lựa chọn định mệnh cho số phận của chính mình.\n\n❓ Mấu chốt bí ẩn chờ bạn khám phá trong sách: Liệu một nữ phù thủy bị cả thế giới thần thánh ruồng bỏ có thể tìm thấy tự do đích thực bằng chính sức mạnh và lòng trắc ẩn của mình?",
  },
  {
    id: "cn-2",
    title: "Harry Potter và Hòn đá Phù thủy",
    author: "J.K. Rowling",
    emotion: "choang-ngop",
    badge: "Giả tưởng Kỳ ảo",
    cover: "images/choang-ngop/harry-potter-va-hon-da-phu-thuy.webp",
    summary:
      "Cậu bé mồ côi Harry Potter sống chuỗi ngày cơ cực dưới gầm cầu thang nhà dượng Dursley mà không hề hay biết thân phận thực sự của mình, cho đến ngày nhận được lá thư nhập học từ trường Pháp thuật và Ma thuật Hogwarts.\n\nBước qua Bức tường Sân ga 9¾, Harry bước vào một thế giới diệu kỳ ngập tràn phép thuật, những cây chổi bay, các sinh vật huyền bí và tình bạn chân thành với Ron và Hermione. Nhưng bóng đen quá khứ chưa bao giờ buông tha cậu.\n\nNhững bí mật ẩn giấu dưới hành lang cấm tầng ba về Hòn đá Phù thủy - báu vật ban phát sự bất tử - dần hé lộ âm mưu trỗi dậy của Chúa tể Hắc ám Voldemort, kẻ đã sát hại cha mẹ Harry mười một năm trước.\n\n❓ Mấu chốt bí ẩn chờ bạn khám phá trong sách: Liệu lòng can đảm và tình bạn thuần khiết của ba đứa trẻ mười một tuổi có đủ sức chống lại thế lực bóng tối tàn bạo nhất thế giới phù thủy?",
  },
  {
    id: "cn-3",
    title: "Lời nguyền của màn đêm",
    author: "Lupita Nyong'o",
    emotion: "choang-ngop",
    badge: "Cổ tích Hiện đại",
    cover: "images/choang-ngop/loi-nguyen-cua-man-dem.webp",
    summary:
      "Cô bé Sulwe sinh ra với làn da đen tuyền thăm thẳm như màu của nửa đêm, khác biệt hoàn toàn với gia đình và bạn bè xung quanh, khiến em luôn cảm thấy tự ti và khao khát có được một làn da sáng màu rực rỡ.\n\nLời nguyện cầu tha thiết của cô bé đưa em vào một giấc mơ siêu thực diệu kỳ giữa các vì sao, nơi em được lắng nghe huyền thoại cổ xưa về hai chị em Ánh Sáng và Bóng Đêm - hai nửa không thể tách rời của tạo hóa.\n\nQua chuyến hành trình bay lượn trên bầu trời sao, Sulwe nhận ra rằng nếu không có bóng đêm sâu thẳm, những vì sao sẽ không thể lấp lánh và cuộc sống sẽ không bao giờ có được sự bình yên, sâu lắng.\n\n❓ Điều đọng lại sau trang sách dành cho bạn: Đã bao giờ bạn chối bỏ vẻ đẹp độc bản của chính mình chỉ vì ánh nhìn của người khác? Và làm thế nào để ta học cách trân trọng ánh sáng nội tại tiềm ẩn trong mỗi chúng ta?",
  },
  {
    id: "cn-4",
    title: "Lời thề tàn nhẫn",
    author: "Rebecca Ross",
    emotion: "choang-ngop",
    badge: "Sử thi Kỳ ảo",
    cover: "images/choang-ngop/loi-the-tan-nhan.webp",
    summary:
      "Cuộc chiến tàn khốc giữa các vị thần cổ đại Dacre và Enva tiếp tục xé toạc thành phố Oath, biến chiến trường thành biển lửa và chia cắt đôi phóng viên trẻ Iris Winnow và Roman Kitt.\n\nMất trí nhớ và bị giam cầm dưới quyền lực của thần Dacre, Roman chỉ còn lại cảm xúc mơ hồ về một người con gái qua những bức thư thần thoại lướt qua gầm tủ áo. Ở bên kia chiến tuyến, Iris dùng ngòi bút quả cảm của mình để tiếp lửa cho cuộc kháng chiến của người phàm.\n\nNhững lá thư đánh máy màu nhiệm nối liền hai tâm hồn qua bom đạn, mở ra những bí mật chấn động về nguồn gốc sự hủy diệt của các vị thần và cái giá của sự tự do.\n\n❓ Mấu chốt bí ẩn chờ bạn khám phá trong sách: Giữa khói lửa chiến tranh thần thánh, liệu những lời hẹn ước được viết bằng tình yêu và ký ức có thể đánh bại được sự tha hóa của quyền lực vĩnh cửu?",
  },
  {
    id: "cn-5",
    title: "Quái vật Ickabog",
    author: "J.K. Rowling",
    emotion: "choang-ngop",
    badge: "Ngụ ngôn Cổ tích",
    cover: "images/choang-ngop/quai-vat-ickabog.webp",
    summary:
      "Vương quốc Cornucopia từng là xứ sở hạnh phúc và phồn thịnh bậc nhất thế giới, nổi tiếng với những món ăn ngon tuyệt hảo, cho đến khi truyền thuyết về quái vật ăn thịt Ickabog vùng đầm lầy phía Bắc bị đánh thức.\n\nLợi dụng sự hoang mang của vị vua Fred khờ khạo, những kẻ cận thần tham lam đã dựng lên một cái bẫy quyền lực thâm độc, biến sự sợ hãi thành công cụ cai trị tàn bạo, đẩy vương quốc vào cảnh bần cùng và chia rẽ.\n\nHai đứa trẻ dũng cảm Bert và Daisy quyết định bước vào đầm lầy huyền bí để tìm kiếm sự thật, đối mặt với sinh vật trong truyền thuyết và vạch trần bộ mặt dối trá của những kẻ cầm quyền.\n\n❓ Điều đọng lại sau trang sách dành cho bạn: Một lời nói dối khi được lặp lại đủ nhiều lần liệu có thể biến thành quái vật hủy diệt cả một quốc gia? Và lòng dũng cảm chân chính nằm ở thanh gươm hay ở lòng trắc ẩn?",
  },
  {
    id: "cn-6",
    title: "Tổng đài kể chuyện lúc 0h",
    author: "Nhiều tác giả",
    emotion: "choang-ngop",
    badge: "Huyền bí Đô thị",
    cover: "images/choang-ngop/tong-dai-ke-chuyen-luc-0h.webp",
    summary:
      "Khi thành phố chìm vào giấc ngủ và kim đồng hồ điểm 0 giờ, một tần số sóng phát thanh bí ẩn cất lên, mở ra kênh kết nối giữa những linh hồn cô độc và những thực tại song song kỳ dị.\n\nNhững cuộc gọi lúc nửa đêm mang đến muôn vàn mảnh ghép siêu thực: một chuyến xe bus không có điểm dừng, chiếc gương soi thấy tương lai mười năm sau, hay giai điệu âm nhạc có thể xóa sạch ký ức của người nghe.\n\nMỗi câu chuyện là một tấm gương phản chiếu những tổn thương, ám ảnh tội lỗi và khát vọng thầm kín nhất của con người giữa nhịp sống đô thị vô cảm và ngột ngạt.\n\n❓ Mấu chốt bí ẩn chờ bạn khám phá trong sách: Lúc nửa đêm, ranh giới giữa những gì ta tưởng tượng và hiện thực mong manh đến mức nào? Và điều đáng sợ hơn là bóng tối ngoài kia hay bóng tối trong lòng chính ta?",
  },
  {
    id: "cn-7",
    title: "Trại trẻ đặc biệt của cô Peregrine",
    author: "Ransom Riggs",
    emotion: "choang-ngop",
    badge: "Giả tưởng Hắc ám",
    cover: "images/choang-ngop/trai-tre-dac-biet-cua-co-peregrine.webp",
    summary:
      "Sau cái chết bi thảm và bí ẩn của người ông nội kính yêu, thiếu niên Jacob Portman lần theo những bức ảnh cổ điển kỳ quái để tìm đến một hòn đảo xa xôi ngoài khơi xứ Wales.\n\nTại đây, Jacob khám phá ra một trại trẻ mồ côi dường như đã bị bom đạn phá hủy từ Thế chiến thứ hai, nhưng thực chất lại đang tồn tại vĩnh cửu trong một vòng lặp thời gian được bảo vệ bởi cô Peregrine - người có khả năng hóa chim ưng. Nơi này che chở cho những đứa trẻ mang dị năng phi thường: cô bé lơ lửng, cậu bé vô hình, người tạo ra lửa từ đôi tay.\n\nSự xuất hiện của những sinh vật bóng tối Hồn Rỗng đe dọa phá vỡ vòng lặp, buộc Jacob phải thức tỉnh năng lực tiềm ẩn của bản thân để bảo vệ những người bạn phi thường.\n\n❓ Mấu chốt bí ẩn chờ bạn khám phá trong sách: Liệu quá khứ có thực sự an toàn hơn hiện tại? Và Jacob sẽ chọn trở về cuộc sống đời thường tẻ nhạt hay ở lại chiến đấu vì một thế giới kỳ diệu đang lâm nguy?",
  },
  {
    id: "cn-8",
    title: "Xứ sở miên man",
    author: "Jun Phạm",
    emotion: "choang-ngop",
    badge: "Cổ tích Giả tưởng",
    cover: "images/choang-ngop/xu-so-mien-man.webp",
    summary:
      "Một người cha đơn thân mải mê với những lo toan cơm áo gạo tiền của cuộc sống hiện đại bỗng vô tình lạc bước vào vùng đất kỳ ảo được thêu dệt từ ký ức tuổi thơ và những món đồ chơi cũ kỹ của con mình.\n\nCùng những người bạn ngộ nghĩnh như chú mèo Mèo Mập, Chú Lính Nhựa hay Búp Bê Gỗ, anh bước vào chuyến phiêu lưu băng qua những xứ sở kỳ lạ, đối mặt với những thử thách đại diện cho nỗi sợ lãng quên và sự chai sạn của người lớn.\n\nGiữa những biến cố huyền diệu, người cha dần nhận ra vết nứt trong tâm hồn mình và khoảng cách vô hình giữa anh với đứa con bé bỏng mà bấy lâu nay anh không hề hay biết.\n\n❓ Điều đọng lại sau trang sách dành cho bạn: Ta đã bỏ quên đứa trẻ ngây thơ trong lòng mình từ bao giờ? Và liệu có bao giờ là quá muộn để chậm lại, lắng nghe và ôm lấy những người thân yêu bằng cả trái tim?",
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
      "Millie - một cô gái có quá khứ tù tội đang tuyệt vọng tìm kiếm việc làm - may mắn được gia đình Winchester giàu có nhận vào làm người giúp việc tại căn biệt thự lộng lẫy nhưng cô lập.\n\nCông việc trong mơ nhanh chóng biến thành địa ngục khi nữ chủ nhà Nina liên tục thể hiện những hành vi tâm thần thất thường, trong khi căn phòng gác mái của Millie chỉ có một chiếc khóa duy nhất... nằm ở phía bên ngoài.\n\nNhững bí mật kinh tởm trong cuộc hôn nhân hoàn hảo dần bị bóc trần, đẩy Millie vào thế cờ sinh tử nơi mọi phán đoán về kẻ săn mồi và con mồi đều bị đảo ngược hoàn toàn.\n\n❓ Mấu chốt bí ẩn chờ bạn khám phá trong sách: Ai mới thực sự là nạn nhân sau cánh cửa gác mái đóng kín? Và một kẻ không còn gì để mất sẽ làm gì để giành giật lại quyền sinh tồn?",
  },
  {
    id: "nn-2",
    title: "Đêm trước đông chí",
    author: "Tư Dược",
    emotion: "ngot-ngat",
    badge: "Hiện thực Đen tối",
    cover: "images/ngot-ngat/dem-truoc-dong-tri.jpg",
    summary:
      "Đêm trước ngày đông chí dài dằng dặc và lạnh lẽo, một vụ án mạng bế tắc trong căn nhà trọ tồi tàn mở ra những góc khuất u tối của tầng lớp dưới đáy xã hội.\n\nCác nhân vật bị cuốn vào vòng xoáy của thù hận, nợ nần và những ràng buộc luân lý ngột ngạt. Từng lời khai chắp vá, từng hành động lầm lỡ đều đẩy họ tiến gần hơn đến bờ vực của sự tha hóa không lối thoát.\n\nKhi sự thật được phơi bày dưới ánh đèn đường leo lét, người đọc nhận ra cái lạnh thấu xương không đến từ thời tiết mùa đông, mà đến từ sự băng giá và vô cảm của lòng người trước bi kịch đồng loại.\n\n❓ Mấu chốt bí ẩn chờ bạn khám phá trong sách: Liệu ánh mặt trời của ngày đông chí có bao giờ sưởi ấm được những tâm hồn đã lún sâu vào bùn lầy tội lỗi?",
  },
  {
    id: "nn-3",
    title: "Đừng bao giờ nói dối",
    author: "Freida McFadden",
    emotion: "ngot-ngat",
    badge: "Tâm lý Bế tắc",
    cover: "images/ngot-ngat/dung-bao-gio-noi-doi.webp",
    summary:
      "Cặp vợ chồng mới cưới Tricia và Ethan bị bão tuyết cô lập trong một dinh thự hẻo lánh từng thuộc về Tiến sĩ tâm thần học Adrienne Hale - người đã biến mất không dấu vết ba năm trước.\n\nĐể giết thời gian, Tricia tình cờ phát hiện ra một căn phòng bí mật chứa toàn bộ những cuộn băng cassette ghi âm các buổi trị liệu của Adrienne. Từng cuộn băng được bật lên giữa đêm tối mang theo những lời thú tội rùng mình của những bệnh nhân tâm thần.\n\nNhững mảnh ghép trong quá khứ dần kết nối với thực tại, hé lộ một âm mưu trả thù tàn độc đang chờ đợi đôi vợ chồng trẻ ngay trong căn nhà kín bưng.\n\n❓ Mấu chốt bí ẩn chờ bạn khám phá trong sách: Một lời nói dối có thể cứu rỗi bạn hôm nay, nhưng liệu nó có chôn vùi bạn vào ngày mai khi sự thật tìm đường lộ diện?",
  },
  {
    id: "nn-4",
    title: "Kẻ nhắc tuồng",
    author: "Donato Carrisi",
    emotion: "ngot-ngat",
    badge: "Hình sự Ý",
    cover: "images/ngot-ngat/ke-nhac-tuong.webp",
    summary:
      "Sáu cánh tay phải của sáu bé gái bị chặt đứt và chôn thành một vòng tròn bí ẩn trong khu rừng mù sương. Năm thi thể nhanh chóng được tìm thấy, nhưng nạn nhân thứ sáu vẫn bặt vô âm tín.\n\nNữ thanh tra Mila Vasquez - chuyên gia tìm kiếm trẻ em mất tích - cùng nhà tâm lý học tội phạm Goran Gavila bước vào cuộc săn lùng kẻ thủ ác. Tuy nhiên, mỗi manh mối họ tìm được lại dẫn đến một kẻ giết người khác nhau, tựa như có một bóng ma đang nhắc tuồng từ trong bóng tối.\n\nKẻ sát nhân thiên tài thao túng cả cảnh sát lẫn truyền thông, biến mỗi tội ác thành một bức thông điệp tàn nhẫn phơi bày những vết thương đạo đức nhơ nhớp của xã hội.\n\n❓ Mấu chốt bí ẩn chờ bạn khám phá trong sách: Khi kẻ nhắc tuồng giật dây những con rối độc ác, ai sẽ là người hạ màn cho vở kịch đẫm máu này trước khi con mồi thứ sáu bị sát hại?",
  },
  {
    id: "nn-5",
    title: "Khúc ca chuộc tội",
    author: "Miêu Phi",
    emotion: "ngot-ngat",
    badge: "Tội ác & Đạo đức",
    cover: "images/ngot-ngat/khuc-ca-chuoc-toi.webp",
    summary:
      "Tiếng chuông sám hối vang lên muộn màng tại một thị trấn nhỏ khi những bí mật bị chôn giấu dưới đáy sông nhiều năm trước bất ngờ nổi lên mặt nước.\n\nMối quan hệ giằng xé giữa các tuyến nhân vật - người thẩm phán mẫu mực, tên tử tù mang nỗi oan khiên và người mẹ mất con - tạo nên một bầu không khí ngột ngạt và căng thẳng tột cùng về sự trả giá.\n\nKhi sự thật được bóc tách từng lớp, ranh giới giữa kẻ phạm tội và người thực thi công lý trở nên mờ mịt, đặt ra câu hỏi cay đắng về sự tha thứ và cứu rỗi lương tâm.\n\n❓ Mấu chốt bí ẩn chờ bạn khám phá trong sách: Có những sai lầm dù đánh đổi bằng cả mạng sống liệu có bao giờ đổi lại được sự thanh thản cho tâm hồn?",
  },
  {
    id: "nn-6",
    title: "Người ếch",
    author: "Shichiri Nakayama",
    emotion: "ngot-ngat",
    badge: "Án mạng Liên hoàn",
    cover: "images/ngot-ngat/nguoi-ech.jpg",
    summary:
      "Một người phụ nữ bị treo lơ lửng trên tầng cao của tòa chung cư bỏ hoang, quấn chặt trong tấm bạt cùng mẩu giấy viết nguệch ngoạc: 'Hôm nay tôi bắt được một con ếch...'\n\nCả thành phố Tokyo rơi vào cơn hoảng loạn tột độ khi hàng loạt thi thể tiếp tục bị sát hại theo những cách tàn bạo tựa như trò chơi giết ếch của trẻ thơ. Đội điều tra do cảnh sát trẻ Kotegawa dẫn đầu phải đối mặt với một kẻ sát nhân tâm thần vô cùng khó đoán.\n\nVụ án chạm đến ngòi nổ tranh cãi gay gắt về Điều 39 Bộ luật Hình sự - điều khoản miễn trừ trách nhiệm hình sự cho người tâm thần, đẩy xã hội vào trạng thái hoang mang tột cùng giữa luật pháp và công lý bản năng.\n\n❓ Mấu chốt bí ẩn chờ bạn khám phá trong sách: Khi công lý bị trói buộc bởi những điều luật vô cảm, nỗi sợ hãi tột cùng sẽ biến con người bình thường thành quái vật ra sao?",
  },
  {
    id: "nn-7",
    title: "Verity",
    author: "Colleen Hoover",
    emotion: "ngot-ngat",
    badge: "Bí mật Bị chôn vùi",
    cover: "images/ngot-ngat/verity-bi-mat-bi-chon-vui.webp",
    summary:
      "Nữ nhà văn nghèo Lowen Ashleigh nhận được lời đề nghị đổi đời: hoàn thành ba cuốn sách còn dang dở của Verity Crawford - một tiểu thuyết gia đình đám bị bại não sau tai nạn thảm khốc.\n\nChuyển đến sống tại dinh thự của Verity để sắp xếp tư liệu, Lowen tình cờ phát hiện ra bản thảo hồi ký chưa từng công bố của Verity. Từng trang viết phơi bày những sự thật rợn người về cái chết của hai đứa con gái sinh đôi và bản chất đen tối, lệch lạc đến tột cùng của người mẹ.\n\nTrong khi tình cảm giữa Lowen và Jeremy - chồng của Verity - dần chớm nở, Lowen bắt đầu nhận thấy những dấu hiệu kỳ quái rằng người phụ nữ bại não nằm trên lầu kia dường như vẫn đang tỉnh táo và theo dõi mọi cử động của cô.\n\n❓ Mấu chốt bí ẩn chờ bạn khám phá trong sách: Bản thảo hồi ký đó là sự thật rùng rợn hay chỉ là một trò chơi tâm lý độc địa nhằm thao túng tâm trí người đọc đến trang cuối cùng?",
  },
  {
    id: "nn-8",
    title: "Vụ ám sát ông Roger Ackroyd",
    author: "Agatha Christie",
    emotion: "ngot-ngat",
    badge: "Cú ngoặt Kinh điển",
    cover: "images/ngot-ngat/vu-am-sat-ong-roger-ackroyd.webp",
    summary:
      "Ngôi làng yên bình King's Abbot chìm trong bầu không khí ngột ngạt khi Roger Ackroyd - vị điền chủ giàu có và quyền lực nhất vùng - bị đâm chết ngay trong phòng làm việc kín mít sau khi nhận được một bức thư tống tiền bí ẩn.\n\nThám tử Hercule Poirot - lúc này đang sống ẩn dật để trồng bí ngô - được mời vào cuộc điều tra cùng với người bạn đồng hành là bác sĩ James Sheppard, người đồng thời đóng vai trò là người kể lại toàn bộ câu chuyện.\n\nMọi thành viên trong gia đình và người hầu đều có động cơ tài chính lẫn bí mật cần che giấu. Nhưng từng manh mối Poirot thu thập được lại dẫn đến một cú lật ngược tình thế gây chấn động bậc nhất lịch sử văn học trinh thám thế giới.\n\n❓ Mấu chốt bí ẩn chờ bạn khám phá trong sách: Ai là kẻ đã ra tay sát hại Roger Ackroyd ngay trước mũi người kể chuyện? Bạn có đủ tinh tế để nhận ra sự thật ẩn giấu sau những lời tự sự tưởng chừng vô hại nhất?",
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
      "Do sự nhầm lẫn của trại trẻ mồ côi, cô bé Anne Shirley gầy gò với mái tóc đỏ rực và trí tưởng tượng bay bổng vô tận đã được gửi đến trang trại Chái Nhà Xanh của hai anh em luống tuổi Matthew và Marilla Cuthbert.\n\nBằng sự lạc quan thuần khiết, tính cách thẳng thắn và tình yêu thiên nhiên tha thiết, Anne đã dần làm tan chảy lớp vỏ nghiêm khắc của Marilla, sưởi ấm trái tim Matthew và mang lại sức sống rực rỡ cho toàn bộ ngôi làng Avonlea.\n\nDẫu trải qua nhiều hiểu lầm vụng dại và thử thách của sự trưởng thành, tâm hồn trong trẻo của Anne vẫn kiên định tìm thấy vẻ đẹp diệu kỳ trong từng nhành cây, ngọn cỏ và tình bạn thủy chung.\n\n❓ Điều đọng lại sau trang sách dành cho bạn: Đã bao giờ bạn để trí tưởng tượng và lòng biết ơn thắp sáng những ngày tăm tối nhất? Và một trái tim chân thành có thể biến đổi cả thế giới xung quanh ra sao?",
  },
  {
    id: "tc-2",
    title: "Bắt trẻ đồng xanh",
    author: "J.D. Salinger",
    emotion: "thau-cam",
    badge: "Nổi loạn Tuổi trẻ",
    cover: "images/thau-cam/bat-tre-dong-xanh.webp",
    summary:
      "Bị đuổi khỏi trường dự bị đại học Pencey Prep ngay trước kỳ nghỉ Giáng sinh, cậu thiếu niên mười sáu tuổi Holden Caulfield một mình lang thang giữa thành phố New York lạnh giá trong trạng thái cô đơn và lạc lõng cùng cực.\n\nBằng giọng văn bộc trực, cay độc nhưng đong đầy tổn thương, Holden phơi bày sự giả tạo, phù phiếm của thế giới người lớn. Giữa những cuộc gặp gỡ vô nghĩa, niềm an ủi duy nhất của cậu là cô em gái nhỏ Phoebe - biểu tượng thuần khiết cuối cùng còn sót lại.\n\nƯớc mơ cháy bỏng nhưng tuyệt vọng của Holden là trở thành 'người bắt trẻ đồng xanh' - người đứng canh ở rìa vực thẳm để đỡ lấy những đứa trẻ đang mải mê chơi đùa không bị rơi xuống thế giới trần tục.\n\n❓ Điều đọng lại sau trang sách dành cho bạn: Có phải ai trong chúng ta cũng từng trải qua những năm tháng hoang mang, lạc lối và tuyệt vọng tìm kiếm một người thấu hiểu tâm hồn mình?",
  },
  {
    id: "tc-3",
    title: "Cây cam ngọt của tôi",
    author: "José Mauro de Vasconcelos",
    emotion: "thau-cam",
    badge: "Nỗi đau Trưởng thành",
    cover: "images/thau-cam/cay-cam-ngot-cua-toi.webp",
    summary:
      "Cậu bé năm tuổi Zezé sinh ra trong một gia đình nghèo đông con tại vùng ngoại ô Rio de Janeiro, mang trong mình trí thông minh thiên bẩm và tâm hồn nhạy cảm phi thường nhưng luôn phải chịu đựng những trận đòn roi vô cớ từ người lớn.\n\nNơi nương tựa duy nhất của Zezé là gốc cam ngọt nhỏ sau vườn mà cậu đặt tên là Bồ Đào - người bạn biết lắng nghe mọi nỗi niềm thơ dại, trước khi cậu gặp ông Bồ, người đàn ông ngoại quốc đã mang đến cho cậu hơi ấm tình thương mà cậu hằng khao khát.\n\nBiến cố đau đớn ập đến cướp đi người bạn lớn nhất đời cậu, giáng một đòn tàn nhẫn buộc đứa trẻ năm tuổi phải thấu hiểu nỗi đau đớn tột cùng của sự chia ly và cái giá buốt giá của việc lớn lên.\n\n❓ Điều đọng lại sau trang sách dành cho bạn: Yêu thương một đứa trẻ có khó đến thế không? Và trong cuộc đời, ta đã từng vô tình làm tổn thương một tâm hồn thuần khiết nào chỉ vì sự thờ ơ của chính mình?",
  },
  {
    id: "tc-4",
    title: "Chiến binh cầu vồng",
    author: "Andrea Hirata",
    emotion: "thau-cam",
    badge: "Nghị lực Tri thức",
    cover: "images/thau-cam/chien-binh-cau-vong.webp",
    summary:
      "Ngôi trường tiểu học Muhammadiyah xập xệ trên hòn đảo Belitong giàu tài nguyên thiếc nhưng người dân nghèo xơ xác, đứng trước nguy cơ bị đóng cửa vĩnh viễn nếu không tuyển đủ mười học sinh trong ngày khai giảng.\n\nMười đứa trẻ nghèo khó - mười 'chiến binh cầu vồng' - cùng hai người thầy cô giáo nghèo tận tụy đã viết nên khúc ca tráng lệ về khát vọng tri thức, vượt qua những con đường lầy lội, hiểm nguy đầm lầy cá sấu và sự chèn ép của tập đoàn khai thác thiếc.\n\nDẫu số phận sau này đưa mỗi người về những ngã rẽ khác nhau, ngọn lửa tri thức và phẩm giá con người được nhen nhóm dưới mái trường xiêu vẹo ấy vẫn mãi mãi soi sáng tâm hồn họ.\n\n❓ Điều đọng lại sau trang sách dành cho bạn: Khi đứng trước nghịch cảnh tưởng chừng không thể vượt qua, liệu bạn có dám giữ vững ước mơ và niềm tin vào sức mạnh cứu rỗi của tri thức?",
  },
  {
    id: "tc-5",
    title: "Chú bé mang pyjama sọc",
    author: "John Boyne",
    emotion: "thau-cam",
    badge: "Bi kịch Chiến tranh",
    cover: "images/thau-cam/chu-be-mang-pyjama-soc.jpg",
    summary:
      "Cậu bé chín tuổi Bruno ngây thơ buộc phải rời xa ngôi nhà ấm êm ở Berlin để chuyển đến vùng đất hẻo lánh 'Out-With', nơi cha cậu - một sĩ quan cấp cao của Đức Quốc Xã - nhận nhiệm vụ chỉ huy một khu trại đặc biệt.\n\nTừ cửa sổ phòng mình, Bruno nhìn thấy một hàng rào dây thép gai dài vô tận ngăn cách những con người gầy gò luôn mặc những bộ 'pyjama sọc'. Trong một lần đi thám hiểm, cậu tình cờ kết bạn với Shmuel - một cậu bé Do Thái sinh cùng ngày cùng tháng đang sống ở bên kia hàng rào.\n\nTình bạn thuần khiết vượt qua định kiến và hận thù dẫn Bruno đến một quyết định định mệnh: chui qua hàng rào dây thép gai để giúp bạn tìm kiếm người cha mất tích...\n\n❓ Điều đọng lại sau trang sách dành cho bạn: Chiến tranh và sự cuồng tín chủng tộc có thể hủy diệt nhân tính đến mức nào? Và một hàng rào dây thép gai liệu có thể chia cắt được hai tâm hồn đồng điệu?",
  },
  {
    id: "tc-6",
    title: "Điều kỳ diệu của tiệm tạp hóa Namiya",
    author: "Higashino Keigo",
    emotion: "thau-cam",
    badge: "Chữa lành Nhân gian",
    cover: "images/thau-cam/dieu-ky-dieu-cua-tap-hoa-namiya.webp",
    summary:
      "Ba tên trộm nghiệp dư Atsuya, Shota và Kohei sau khi gây án đã chạy trốn vào một tiệm tạp hóa cũ kỹ bỏ hoang ven đường để trú ẩn qua đêm, không ngờ rằng nơi đây từng là điểm tư vấn tâm lý nổi tiếng của ông lão Namiya tốt bụng.\n\nĐiều kỳ diệu xảy ra khi những lá thư xin tư vấn từ quá khứ ba mươi năm trước bất ngờ rơi qua khe cửa cuốn. Bất đắc dĩ trở thành người gỡ rối tơ lòng, ba kẻ lầm lỡ đã hồi âm cho những số phận trăn trở giữa ngã ba đường: một vận động viên đấu tranh giữa giấc mơ Olympic và người yêu bạo bệnh, một chàng nhạc sĩ nghèo loay hoay với đam mê...\n\nNhững lá thư vượt thời gian đan dệt nên một mạng lưới nhân duyên kỳ diệu, chứng minh rằng sự chân thành lắng nghe có sức mạnh hàn gắn những vết thương lòng sâu sắc nhất.\n\n❓ Điều đọng lại sau trang sách dành cho bạn: Bản đồ cuộc đời của bạn dẫu đang là một tờ giấy trắng, nhưng chẳng phải điều đó đồng nghĩa với việc bạn hoàn toàn tự do vẽ nên tương lai của chính mình hay sao?",
  },
  {
    id: "tc-7",
    title: "Người đàn ông mang tên Ove",
    author: "Fredrik Backman",
    emotion: "thau-cam",
    badge: "Ấm áp Tình người",
    cover: "images/thau-cam/nguoi-dan-ong-mang-ten-ove.webp",
    summary:
      "Ông lão Ove năm mươi chín tuổi nổi tiếng khắp khu phố là một kẻ cáu kỉnh, nguyên tắc đến cổ hủ và luôn mang vẻ mặt giận dữ với cả thế giới sau khi bị cho nghỉ hưu và mất đi người vợ thân yêu.\n\nKế hoạch tự tử để đoàn tụ với người vợ quá cố của Ove liên tục bị phá vỡ bởi sự xuất hiện của gia đình người hàng xóm mới chuyển đến - một cô gái Iran hoạt bát, người chồng vụng về cùng hai đứa trẻ ríu rít. Bằng sự kiên trì và ấm áp vụng về, họ dần kéo Ove trở lại với dòng chảy cuộc sống.\n\nTừng lớp vỏ xù xì, gai góc dần được bóc tách để lộ một trái tim nhân hậu, thủy chung son sắt và sẵn sàng hy sinh tất cả vì người khác của một người đàn ông lương thiện bậc nhất.\n\n❓ Điều đọng lại sau trang sách dành cho bạn: Đằng sau vẻ ngoài lạnh lùng của một người có thể là những vết nứt sâu hoắm chưa lành; liệu ta có đủ kiên nhẫn để yêu thương họ bằng sự chân thành không phán xét?",
  },
  {
    id: "tc-8",
    title: "Những tấm lòng cao cả",
    author: "Edmondo De Amicis",
    emotion: "thau-cam",
    badge: "Văn học Kinh điển",
    cover: "images/thau-cam/nhung-tam-long-cao-ca.webp",
    summary:
      "Dưới hình thức cuốn nhật ký học trò của cậu bé Enrico Bottini mười tuổi, tác phẩm ghi lại trọn vẹn một năm học tại một trường tiểu học ở thành phố Torino, nước Ý thời kỳ thống nhất.\n\nCuốn sách đan xen giữa những trải nghiệm đời thường của Enrico bên thầy cô, bạn bè với những lá thư khuyên răn sâu sắc của cha mẹ và những câu chuyện xúc động về những tấm gương thiếu niên dũng cảm của nước Ý.\n\nTình thầy trò thiêng liêng, tình bạn không phân biệt sang hèn và lòng hiếu thảo được soi chiếu qua từng trang viết dung dị, nuôi dưỡng nên một tâm hồn giàu lòng trắc ẩn và tinh thần trách nhiệm với xã hội.\n\n❓ Điều đọng lại sau trang sách dành cho bạn: Lòng tốt là thứ ngôn ngữ mà người điếc có thể nghe và người mù có thể nhìn thấy; ta đã thực sự sống xứng đáng với những tấm lòng cao cả xung quanh mình chưa?",
  },
  {
    id: "tc-9",
    title: "Rừng Na Uy",
    author: "Haruki Murakami",
    emotion: "thau-cam",
    badge: "Nỗi buồn Tuổi trẻ",
    cover: "images/thau-cam/rung-nauy.webp",
    summary:
      "Giai điệu bài hát 'Norwegian Wood' của The Beatles bất ngờ vang lên trên một chuyến bay đưa Toru Watanabe ba mươi bảy tuổi chìm sâu vào dòng ký ức thanh xuân u buồn giữa Tokyo thập niên 60 đầy biến động.\n\nToru bị giằng xé giữa hai người phụ nữ: Naoko - người yêu của người bạn thân đã tự sát, một cô gái mang tâm hồn mong manh, vỡ vụn đang điều trị tại viện an dưỡng; và Midori - một ngọn lửa căng tràn sức sống, tự do và bướng bỉnh.\n\nNhững cái chết tự sát liên tiếp của những người trẻ tuổi phơi bày nỗi cô đơn cùng cực, sự trống rỗng và hành trình tìm kiếm điểm tựa linh hồn trước ranh giới mong manh giữa sự sống và cái chết.\n\n❓ Điều đọng lại sau trang sách dành cho bạn: Cái chết không phải là điều đối nghịch của sự sống, mà là một phần nằm ngay trong sự sống; ta phải làm sao để bước tiếp khi những người ta yêu thương lần lượt rời đi?",
  },
  {
    id: "tc-10",
    title: "Trường ca Achilles",
    author: "Madeline Miller",
    emotion: "thau-cam",
    badge: "Sử thi & Tri kỷ",
    cover: "images/thau-cam/truong-ca-achilles.webp",
    summary:
      "Dưới chân thành Troy rực lửa khói chiến tranh, thiên tình sử bi tráng giữa Achilles - chiến binh vĩ đại nhất của người Hy Lạp - và Patroclus, một hoàng tử nhỏ bé bị thất sủng và lưu đày, được tái hiện qua góc nhìn xúc động.\n\nTừ những ngày tháng niên thiếu êm đềm dưới sự bảo bọc của nhân mã Chiron đến chiến trường thành Troy khốc liệt, Patroclus luôn là chiếc mỏ neo dịu dàng gìn giữ phần nhân tính cuối cùng trong linh hồn kiêu hãnh của Achilles.\n\nKhi định mệnh khắc nghiệt và danh dự thần thánh đòi hỏi sự hy sinh, Patroclus khoác lên mình bộ giáp của Achilles để cứu vãn quân đội, dẫn đến cái chết bi tráng làm rung chuyển cả thế giới cổ đại.\n\n❓ Điều đọng lại sau trang sách dành cho bạn: Danh vọng bất tử và tình yêu tri kỷ trọn vẹn, điều nào mới thực sự có ý nghĩa khi cát bụi thời gian chôn vùi tất cả vinh quang trần thế?",
  },
  {
    id: "tc-11",
    title: "Tuổi thơ dữ dội",
    author: "Phùng Quán",
    emotion: "thau-cam",
    badge: "Hào hùng Dân tộc",
    cover: "images/thau-cam/tuoi-tho-du-doi-1.jpg",
    summary:
      "Chiến khu Bình Trị Thiên những năm đầu kháng chiến chống thực dân Pháp gian khổ và ác liệt, nơi Đội Thiếu niên trinh sát thuộc Trung đoàn Trần Cao Vân được thành lập với những chiến sĩ chỉ mới mười hai, mười ba tuổi.\n\nTác phẩm khắc họa sinh động chân dung những thiếu niên quả cảm như Lượm sứt, Mừng, Vịnh sưa, Quỳnh sơn ca... Mỗi em mang một hoàn cảnh, một tính cách nhưng đều chung một bầu máu nóng yêu nước và lòng trung thành tuyệt đối với cách mạng.\n\nNhững trận chiến đẫm máu, sự hy sinh lẫm liệt của Vịnh sưa trên nóc kho đạn, hay nỗi oan khiên đứt ruột của em Mừng trước khi trút hơi thở cuối cùng làm rung chuyển trái tim người đọc bằng nước mắt và niềm tự hào dân tộc.\n\n❓ Điều đọng lại sau trang sách dành cho bạn: Khi Tổ quốc lâm nguy, tâm hồn trong trắng của những đứa trẻ có thể tỏa sáng rực rỡ đến nhường nào? Và chúng ta hôm nay phải sống sao cho xứng đáng với máu xương của thế hệ đi trước?",
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
      "Minh tinh màn bạc Hollywood huyền thoại Evelyn Hugo ở tuổi xế chiều bất ngờ quyết định phá vỡ sự im lặng bấy lâu, chọn Monique Grant - một nữ phóng viên vô danh - để kể lại toàn bộ sự thật về cuộc đời mình.\n\nĐằng sau hào quang rực rỡ và bảy cuộc hôn nhân gây chấn động truyền thông là một hành trình đầy toan tính, tham vọng và đánh đổi nghiệt ngã để bảo vệ tình yêu đích thực duy nhất của đời bà: mối tình đồng giới thầm kín với nữ diễn viên Celia St. James.\n\nKhi bức màn nhung hạ xuống, lý do thực sự đằng sau việc Evelyn chọn Monique để trao gửi bản hồi ký được hé lộ, phơi bày một món nợ quá khứ đau đớn gắn kết số phận hai người phụ nữ.\n\n❓ Điều đọng lại sau trang sách dành cho bạn: Giữa hào quang danh vọng của cả thế giới và quyền được yêu thương người mình chọn bằng cả trái tim, ta sẵn sàng trả cái giá đắt đến mức nào?",
  },
  {
    id: "xx-2",
    title: "Đồi gió hú",
    author: "Emily Brontë",
    emotion: "xao-xuyen",
    badge: "Tình yêu Hoang dại",
    cover: "images/xao-xuyen/doi-gio-hu.webp",
    summary:
      "Giữa vùng đồng hoang hoang vu, lạnh giá và gió lộng xứ Yorkshire, hai gia đình Earnshaw tại Đồi Gió Hú và Linton tại Trang viên Vành Khuyên bị cuốn vào một bi kịch truyền đời đẫm thù hận.\n\nMối tình thuở thiếu thời giữa chàng trai mồ côi Heathcliff và nàng Catherine Earnshaw nồng nhiệt nhưng đầy bản năng hoang dã. Khi Catherine quyết định kết hôn với Edgar Linton vì địa vị xã hội, trái tim tan vỡ của Heathcliff đã biến thành ngọn lửa phục thù tàn bạo nuốt chửng cả hai thế hệ.\n\nSự thù hận tột cùng không thể dập tắt nỗi ám ảnh về tình yêu, dẫn đến cái chết bi thương và cuộc hội ngộ siêu nhiên của hai linh hồn trên đồng hoang vĩnh cửu.\n\n❓ Điều đọng lại sau trang sách dành cho bạn: Dù tâm hồn chúng ta được tạo nên từ chất liệu gì, có những tình yêu mãnh liệt đến mức vượt qua ranh giới giữa sự sống, cái chết và cả đạo đức trần thế hay không?",
  },
  {
    id: "xx-3",
    title: "Em sẽ đến cùng cơn mưa",
    author: "Takuji Ichikawa",
    emotion: "xao-xuyen",
    badge: "Lãng mạn Thuần khiết",
    cover: "images/xao-xuyen/em-se-den-cung-con-mua.webp",
    summary:
      "Một năm sau khi người vợ trẻ Mio qua đời, người chồng vụng về Takumi và cậu con trai sáu tuổi Yuji sống trong sự trống vắng, chỉ biết bám víu vào lời hẹn ước kỳ lạ trước lúc lâm chung của cô: 'Khi mùa mưa năm sau đến, mẹ sẽ trở về xem hai bố con sống thế nào.'\n\nĐúng vào ngày đầu tiên của mùa mưa, tại nhà xưởng bỏ hoang trong rừng, một người phụ nữ có ngoại hình giống hệt Mio bất ngờ xuất hiện nhưng đã mất đi toàn bộ ký ức. Takumi đón cô về nhà và kể lại cho cô nghe câu chuyện tình yêu vụng dại thuở thiếu thời của họ.\n\nSáu tuần mùa mưa trôi qua tựa như một giấc mộng thiên đường êm đềm, cho đến khi mùa mưa kết thúc và cuốn nhật ký của Mio hé lộ sự thật cảm động về sự lựa chọn dũng cảm của tình yêu.\n\n❓ Điều đọng lại sau trang sách dành cho bạn: Nếu biết trước tương lai hạnh phúc sẽ chỉ ngắn ngủi và kết thúc bằng chia ly, bạn có còn dám can đảm bước vào tình yêu ấy một lần nữa?",
  },
  {
    id: "xx-4",
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    emotion: "xao-xuyen",
    badge: "Khí phách Phụ nữ",
    cover: "images/xao-xuyen/jane-eyre.webp",
    summary:
      "Cô bé mồ côi Jane Eyre lớn lên trong sự ngược đãi của gia đình dì dượng và sự khắc nghiệt của trường nội trú Lowood, nhưng chưa bao giờ để hoàn cảnh dập tắt lòng tự trọng và khát vọng tự do cháy bỏng.\n\nTrở thành gia sư tại dinh thự u uất Thornfield, Jane tìm thấy sự đồng điệu tâm hồn sâu sắc với ngài Rochester - một người đàn ông quyền quý, bí ẩn và đầy thương tổn. Tình cảm chân thành vượt qua rào cản giai cấp đưa họ đến gần ngưỡng cửa hôn nhân.\n\nSự thật kinh hoàng về người vợ điên bị giam cầm trên gác mái được phơi bày ngay trong lễ cưới, buộc Jane phải đưa ra quyết định đau đớn: rời bỏ người mình yêu để giữ gìn phẩm giá và nguyên tắc đạo đức của bản thân.\n\n❓ Điều đọng lại sau trang sách dành cho bạn: Khi tình yêu đòi hỏi bạn phải đánh đổi lòng tự trọng và nhân phẩm, bạn sẽ chọn khuất phục trước đam mê hay kiên định đứng vững như một linh hồn tự do?",
  },
  {
    id: "xx-5",
    title: "Khi lỗi thuộc về các vì sao",
    author: "John Green",
    emotion: "xao-xuyen",
    badge: "Thanh xuân Dang dở",
    cover: "images/xao-xuyen/khi-loi-thuoc-ve-cac-vi-sao.webp",
    summary:
      "Hazel Grace Lancaster - cô gái mười sáu tuổi mang trong mình căn bệnh ung thư tuyến giáp giai đoạn cuối luôn phải kè kè bình dưỡng khí - tình cờ gặp Augustus Waters, một chàng trai điển trai đã vượt qua ung thư xương nhưng phải cưa mất một bên chân, tại một hội hỗ trợ bệnh nhân ung thư.\n\nTình yêu giữa hai người trẻ tuổi nảy nở bằng sự hóm hỉnh, thông minh và niềm say mê chung dành cho một cuốn sách dang dở. Họ cùng nhau gom góp những ngày tháng ngắn ngủi còn lại để thực hiện chuyến đi đến Amsterdam gặp tác giả cuốn sách.\n\nCăn bệnh ung thư bất ngờ tái phát và hủy hoại cơ thể Augustus, nhưng không thể dập tắt ngọn lửa tình yêu thuần khiết và lòng biết ơn sâu sắc mà họ dành cho nhau trong từng khoảnh khắc hữu hạn.\n\n❓ Điều đọng lại sau trang sách dành cho bạn: Ta không thể chọn mình có bị tổn thương trên thế giới này hay không, nhưng ta hoàn toàn có quyền lựa chọn ai là người sẽ làm tổn thương mình; bạn đã sống trọn vẹn cho tình yêu hôm nay chưa?",
  },
  {
    id: "xx-6",
    title: "Kiêu hãnh và định kiến",
    author: "Jane Austen",
    emotion: "xao-xuyen",
    badge: "Cổ điển Hoàng gia",
    cover: "images/xao-xuyen/kieu-hanh-va-dinh-kien.webp",
    summary:
      "Vùng nông thôn nước Anh thế kỷ 19 xôn xao trước sự xuất hiện của hai quý tộc giàu có Bingley và Darcy, châm ngòi cho những toan tính hôn nhân của các gia đình quý tộc trung lưu, đặc biệt là gia đình bà Bennet với năm cô con gái chưa chồng.\n\nNàng Elizabeth Bennet thông minh, cá tính và độc lập nhanh chóng nảy sinh định kiến sâu sắc với Fitzwilliam Darcy - một người đàn ông giàu có nhưng mang vẻ ngoài kiêu ngạo, lạnh lùng. Ngược lại, Darcy lại dần bị mê hoặc bởi đôi mắt sáng ngời và sự thẳng thắn của nàng.\n\nQua những hiểu lầm dở khóc dở cười và những biến cố gia đình kịch tính, cả hai dần nhận ra những khiếm khuyết trong tính cách của mình: Darcy học cách rũ bỏ lòng kiêu hãnh, còn Elizabeth can đảm gạt bỏ những định kiến sai lầm để đón nhận tình yêu chân thành.\n\n❓ Điều đọng lại sau trang sách dành cho bạn: Đã bao giờ lòng kiêu hãnh hay những định kiến vội vàng ngăn cản bạn nhận ra vẻ đẹp thực sự của một tâm hồn đang hướng về mình?",
  },
  {
    id: "xx-7",
    title: "Mắt biếc",
    author: "Nguyễn Nhật Ánh",
    emotion: "xao-xuyen",
    badge: "Hoài niệm Quê hương",
    cover: "images/xao-xuyen/mat-biec.webp",
    summary:
      "Làng Đo Đo thơ mộng với rừng sim tím, giàn hoa thiên lý và ngôi trường làng đơn sơ là nơi chứng kiến tình bạn trong veo thuở ấu thơ giữa Ngạn và Hà Lan - cô bạn gái có đôi mắt biếc biếc thăm thẳm như chứa cả trời thu.\n\nLớn lên, cả hai cùng rời làng lên thành phố học tập. Trong khi Hà Lan nhanh chóng bị choáng ngợp bởi ánh đèn phồn hoa đô hội và ngã vào vòng tay của Dũng, Ngạn vẫn ôm trọn mối tình đơn phương thủy chung, lặng lẽ đứng bên lề cuộc đời cô như một chiếc bóng.\n\nKhi bi kịch xảy đến với Hà Lan và đứa con gái Trà Long ra đời mang đôi mắt biếc giống hệt mẹ, Ngạn dành trọn tình thương chăm sóc cho cô bé, nhưng cuối cùng anh nhận ra mình không thể tìm kiếm hình bóng của người xưa trong đôi mắt của thế hệ sau.\n\n❓ Điều đọng lại sau trang sách dành cho bạn: Một đời si tình ôm giữ những hoài niệm dĩ vãng là sự cao thượng thuần khiết hay chỉ là nỗi chấp niệm xót xa của một kẻ mãi không chịu lớn lên?",
  },
  {
    id: "xx-8",
    title: "Vợ của người du hành thời gian",
    author: "Audrey Niffenegger",
    emotion: "xao-xuyen",
    badge: "Vượt qua Thời gian",
    cover: "images/xao-xuyen/vo-cua-nguoi-du-hanh-thoi-gian.webp",
    summary:
      "Henry DeTamble mắc phải một hội chứng di truyền kỳ lạ khiến anh bị dịch chuyển thời gian ngoài tầm kiểm soát, xuất hiện trần trụi và đơn độc ở những thời điểm và không gian ngẫu nhiên trong quá khứ hoặc tương lai.\n\nClare Abshire gặp Henry lần đầu năm cô sáu tuổi tại đồng cỏ sau nhà, khi một phiên bản trung niên của Henry xuất hiện từ tương lai. Cô dành cả tuổi thanh xuân kiên nhẫn chờ đợi, để rồi khi gặp lại Henry ở tuổi hai mươi tám (khi anh mới hai mươi), tình yêu của họ phải đối mặt với muôn vàn nghịch lý thời gian và sự chia ly bất ngờ.\n\nDù biết trước những bi kịch nghiệt ngã đang chờ đợi phía trước, tình yêu sâu sắc và lòng chung thủy kiên định của Clare đã trở thành chiếc mỏ neo duy nhất giúp Henry tìm đường trở về giữa dòng chảy hỗn loạn của năm tháng.\n\n❓ Điều đọng lại sau trang sách dành cho bạn: Khi thời gian có thể chia cắt thể xác nhưng không thể lay chuyển được tình yêu, ta sẽ trân trọng từng phút giây hiện tại bên người mình thương yêu đến nhường nào?",
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
  // Lấy User Key duy nhất của tài khoản đang đăng nhập
  const getCurrentUserKey = () => {
    try {
      const raw = localStorage.getItem("currentUser");
      if (!raw) return null;
      const user = JSON.parse(raw);
      return (
        (user && (user.username || user.email || user.name || user.id)) || null
      );
    } catch {
      return null;
    }
  };

  // Cập nhật giao diện trái tim trong Modal theo localStorage của tài khoản hiện tại
  const updateModalHeartUI = (bookId) => {
    if (!heartBtn) return;
    const userKey = getCurrentUserKey();
    if (!userKey) {
      heartBtn.classList.remove("is-loved");
      heartBtn.setAttribute("aria-pressed", "false");
      return;
    }
    const favKey = `favorites_${userKey}`;
    try {
      const raw = localStorage.getItem(favKey);
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
      console.error(`Lỗi đọc ${favKey}:`, err);
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

  // Tương tác Thả tim trong Modal (Gắn liền với User ID / Strict Auth)
  if (heartBtn) {
    heartBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!currentActiveBook) return;

      const userKey = getCurrentUserKey();
      // Yêu cầu đăng nhập nếu là khách vãng lai
      if (!userKey) {
        alert("Vui lòng đăng nhập để lưu cuốn sách này vào danh sách yêu thích của bạn!");
        window.location.href = "auth.html";
        return;
      }

      const favKey = `favorites_${userKey}`;
      try {
        const raw = localStorage.getItem(favKey);
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

        localStorage.setItem(favKey, JSON.stringify(favs));
      } catch (err) {
        console.error(`Lỗi cập nhật ${favKey}:`, err);
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

  // Xác định userKey của tài khoản đang đăng nhập (khách thì lưu tạm viewHistory_guest)
  let userKey = "guest";
  try {
    const raw = localStorage.getItem("currentUser");
    if (raw) {
      const u = JSON.parse(raw);
      userKey = (u && (u.username || u.email || u.name || u.id)) || "guest";
    }
  } catch {
    userKey = "guest";
  }

  const historyKey = `viewHistory_${userKey}`;

  try {
    const rawHistory = localStorage.getItem(historyKey);
    let history = rawHistory ? JSON.parse(rawHistory) : [];

    // Loại bỏ bản ghi cũ nếu đã có
    history = history.filter((item) => String(item.id) !== String(bookObj.id));

    // Đẩy sách mới xem lên đầu
    history.unshift(bookObj);

    // Cắt mảng tối đa 12 cuốn gần nhất
    const limitedHistory = history.slice(0, 12);
    localStorage.setItem(historyKey, JSON.stringify(limitedHistory));
  } catch (error) {
    console.error(`Lỗi khi cập nhật ${historyKey}:`, error);
  }
}
