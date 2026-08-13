export type CaseMetric = {
  value: string;
  label: string;
};

export type CaseFinding = {
  index: string;
  title: string;
  description: string;
};

export type CaseRecommendation = {
  tag: string;
  title: string;
  description: string;
};

export type WaveBranch = {
  tag: string;
  title: string;
  description: string;
};

export type WaveItem = {
  badge: string;
  label: string;
  title: string;
  description: string;
  muted?: boolean;
  branches?: WaveBranch[];
};

export type PriorityItem = {
  rank: string;
  title: string;
  description: string;
  strength: number;
};

export type CommercialReportData = {
  theme: "tiktok" | "mbbank" | "mobifone";
  kicker: string;
  title: string;
  summary: string;
  context: string;
  metrics: CaseMetric[];
  findings: CaseFinding[];
  recommendations: CaseRecommendation[];
  recommendationIntro?: string;
  waves?: WaveItem[];
  priorities?: PriorityItem[];
  maintain?: { tag: string; title: string; description: string };
  evidenceTitle: string;
  evidence: string;
  ctaText: string;
};

export const commercialReports: Record<string, CommercialReportData> = {
  "tiktok-shop": {
    theme: "tiktok",
    kicker: "Thương mại điện tử · TikTok Shop",
    title: "Vì sao khách hàng không quay lại sau một đơn hàng lỗi?",
    summary:
      '1.087 người mua đã hoàn tất khiếu nại "hàng không đúng mô tả" trên TikTok Shop. Điều họ quan tâm không chỉ là được hoàn tiền, mà là liệu lần mua tiếp theo có còn đáng để đánh cược.',
    context:
      "TikTok Shop hiện chiếm hơn 41% doanh số trong nhóm các sàn thương mại điện tử lớn tại Việt Nam, phần lớn nhờ hành trình khám phá và mua hàng diễn ra rất nhanh qua video ngắn và livestream. Chính tốc độ đó cũng làm tăng nguy cơ khách nhận được sản phẩm khác với những gì đã thấy. Nghiên cứu này khảo sát đúng nhóm khách đã trải qua tình huống đó và đã đi hết quy trình khiếu nại, để trả lời câu hỏi quan trọng hơn việc hoàn tiền: sau khi mọi thứ đã xong, khách có còn muốn quay lại hay không.",
    metrics: [
      {
        value: "2.7×",
        label: "Sức ảnh hưởng của sản phẩm sai mô tả so với từng vấn đề hậu mãi riêng lẻ",
      },
      {
        value: "93%",
        label: "Nguy cơ rời bỏ ở nhóm khách mất niềm tin sau sự cố",
      },
      {
        value: "96%",
        label: "Chỉ số AUC của mô hình dự đoán khách có nguy cơ rời bỏ",
      },
    ],
    findings: [
      {
        index: "01",
        title: "Đóng ticket không đồng nghĩa giữ được khách",
        description:
          "Rất nhiều case đã hoàn tiền và hiển thị trạng thái đã xử lý trên hệ thống, nhưng khách hàng vẫn âm thầm giảm niềm tin và có xu hướng rời đi. Tỷ lệ hoàn tiền không phải thước đo giữ chân khách hàng.",
      },
      {
        index: "02",
        title: "Vết sẹo từ sản phẩm sai không biến mất dù đã hoàn tiền",
        description:
          "Ngoài việc làm giảm niềm tin, sản phẩm sai mô tả còn có một đường ảnh hưởng trực tiếp tới ý định mua lại. Xử lý hậu mãi tốt đến đâu cũng không xóa hết được phần này.",
      },
      {
        index: "03",
        title: "Ai rời bỏ không phụ thuộc vào việc họ là ai",
        description:
          "Tuổi tác, mức chi tiêu, ngành hàng gần như không ảnh hưởng đến việc khách có quay lại hay không. Thứ quyết định là sự cố được xử lý công bằng, nhanh và rõ ràng đến đâu.",
      },
      {
        index: "04",
        title: "Rủi ro rời bỏ chia gần như đôi mẫu khảo sát",
        description:
          "Khoảng một nửa số khách gặp sự cố rơi vào nhóm có nguy cơ rời bỏ cao, nửa còn lại phục hồi khá tốt. Đây không phải một vấn đề nhỏ ở rìa dữ liệu mà là một rủi ro giữ chân ở quy mô đáng kể.",
      },
    ],
    recommendations: [
      {
        tag: "Ưu tiên 1",
        title: "Ngăn sai lệch từ gốc, trước khi khách bấm mua",
        description:
          "Đối chiếu nội dung quảng cáo, hình ảnh, video và livestream với thông số sản phẩm thật, tự động gắn cờ cảnh báo khi có sự lệch nhau. Theo dõi người bán hoặc sản phẩm có tỷ lệ khiếu nại sai mô tả lặp lại nhiều lần để đưa vào diện kiểm tra ưu tiên.",
      },
      {
        tag: "Ưu tiên 2",
        title: "Làm hậu mãi công bằng hơn, nhẹ nhàng hơn, rõ ràng hơn",
        description:
          "Xây bộ quy tắc hoàn tiền nhất quán theo mức thiệt hại thực tế, bao gồm cả chi phí phát sinh ngoài giá sản phẩm. Không bắt khách gửi lại cùng một bằng chứng nhiều lần khi case chuyển giữa các bộ phận xử lý. Mỗi case cần có dòng thời gian rõ ràng để khách biết đang chờ ai và cần làm gì tiếp theo.",
      },
      {
        tag: "Lộ trình",
        title: "Thử nghiệm có đo lường trước khi mở rộng toàn nền tảng",
        description:
          "30 ngày đầu dùng để chuẩn hóa cách gắn nhãn sự cố và đo mức niềm tin làm mốc so sánh. 30 ngày kế tiếp chạy thử có nhóm đối chứng cho cả hai nhóm hành động. 30 ngày cuối dùng để quyết định mở rộng, điều chỉnh hoặc dừng lại dựa trên tỷ lệ khách thật sự quay lại mua, không chỉ điểm khảo sát niềm tin.",
      },
    ],
    recommendationIntro:
      "Nghiên cứu gốc tổ chức hành động thành hai đợt triển khai, gọi là Wave, dựa trên độ lớn tổng hiệu ứng của từng yếu tố lên ý định mua lại.",
    waves: [
      {
        badge: "1",
        label: "Wave 1",
        title: "Chặn cú sốc gốc, trước khi cần phục hồi",
        description:
          "Giảm mức sai lệch giữa nội dung bán hàng và sản phẩm thật. Đây là đòn bẩy có tổng hiệu ứng lớn nhất lên ý định mua lại, khoảng 0,696, gấp gần 2,7 lần từng đòn bẩy hậu mãi riêng lẻ. Hành động chịu lực là đối chiếu các nội dung quảng cáo quan trọng về kích thước, chất liệu, công dụng và hình ảnh với thuộc tính sản phẩm thật, đồng thời theo dõi người bán hoặc sản phẩm có tỷ lệ khiếu nại sai mô tả lặp lại để đưa vào diện kiểm tra ưu tiên trước khi bán.",
      },
      {
        badge: "2",
        label: "Wave 2",
        title: "Phục hồi quan hệ theo ba nhánh chạy song song",
        description:
          "Ba đòn bẩy dưới đây có tổng hiệu ứng gần bằng nhau, chỉ chênh lệch rất nhỏ, nên được triển khai đồng thời thay vì xếp thứ tự trước sau.",
        branches: [
          { tag: "Công bằng hoàn tiền", title: "Kết quả tương xứng thiệt hại", description: "Bộ quy tắc hoàn tiền theo loại lỗi và mức thiệt hại thực tế, tính cả chi phí phát sinh ngoài giá sản phẩm." },
          { tag: "Giảm ma sát quy trình", title: "Không hỏi lại cùng bằng chứng", description: "Không bắt khách gửi lại bằng chứng đã cung cấp khi case chuyển giữa các bộ phận xử lý." },
          { tag: "Minh bạch xử lý", title: "Một dòng thời gian duy nhất", description: "Mỗi case hiển thị rõ trạng thái, việc còn thiếu, thời hạn và căn cứ ra quyết định." },
        ],
      },
      {
        badge: "PRT",
        label: "Xuyên suốt, không phải Wave riêng",
        title: "Theo dõi niềm tin phục hồi như chỉ báo dẫn đường",
        description:
          "Niềm tin sau khi case đóng được đo để dự đoán khả năng mua lại, nhưng không được biến thành một ưu tiên can thiệp đứng ngang hàng hai Wave ở trên. Toàn bộ hai Wave nên được thử nghiệm có nhóm đối chứng trong một lộ trình khoảng 90 ngày trước khi mở rộng toàn nền tảng.",
        muted: true,
      },
    ],
    evidenceTitle: "Cách dữ liệu được kiểm chứng",
    evidence:
      "Kết quả dựa trên khảo sát 1.087 người mua đã hoàn tất quy trình khiếu nại, phân tích bằng mô hình phương trình cấu trúc kết hợp nhiều phép kiểm tra độ bền độc lập như ghép đôi thống kê, học máy và phân rã Shapley. Toàn bộ các mối quan hệ chính đều giữ nguyên dấu và độ lớn khi kiểm tra lại với các biến nền khác nhau.",
    ctaText:
      "Bản đầy đủ có thêm lộ trình triển khai 90 ngày, bộ chỉ số theo dõi và phụ lục phương pháp nghiên cứu.",
  },
  "mb-bank": {
    theme: "mbbank",
    kicker: "Ngân hàng số · App MBBank",
    title: "Vì sao khách ngại quét sinh trắc học, dù vẫn tin hệ thống an toàn?",
    summary:
      "1.187 khách hàng cá nhân tại TP.HCM, đã xác thực sinh trắc học ít nhất 3 lần trong 6 tháng gần nhất. Niềm tin và sự sẵn lòng chịu thao tác hóa ra là hai chuyện hoàn toàn khác nhau.",
    context:
      "Từ tháng 7 năm 2024, quy định của Ngân hàng Nhà nước yêu cầu xác thực sinh trắc học cho các giao dịch giá trị cao và khi đổi thiết bị. Với một ứng dụng có quy mô hàng chục triệu giao dịch mỗi ngày, một bước xác thực bị lặp lại không còn là chuyện vài giây. Nó tích lũy thành thời gian chờ, yêu cầu hỗ trợ tăng lên, và trong trường hợp xấu nhất là khách âm thầm chuyển một phần nhu cầu giao dịch sang ứng dụng khác. Nghiên cứu này tìm hiểu chính xác điều gì đang xảy ra trong khoảnh khắc đó.",
    metrics: [
      {
        value: "72%",
        label: "Khách từng phải xác thực lại ít nhất một lần trong 6 tháng",
      },
      {
        value: "2×",
        label: "Mức giảm ý định dùng app giữa nhóm lỗi nhiều và nhóm không lỗi",
      },
      {
        value: "78%",
        label: "Khả năng dự đoán niềm tin và ý định tiếp tục từ trải nghiệm xác thực",
      },
    ],
    findings: [
      {
        index: "01",
        title: "Tin hệ thống không đồng nghĩa sẵn lòng dùng mỗi ngày",
        description:
          "Khách có thể hoàn toàn tin bước xác thực là an toàn, nhưng vẫn giảm dùng app nếu phải quét đi quét lại nhiều lần. Tăng niềm tin không xóa được chi phí thao tác đó.",
      },
      {
        index: "02",
        title: "Không phải ai cũng chịu ảnh hưởng như nhau",
        description:
          "Khách biết tự xử lý, tự căn chỉnh và thử lại đúng cách, hầu như không bị ảnh hưởng bởi lỗi xác thực. Khách chưa biết cách xử lý bị ảnh hưởng rất nặng bởi đúng lỗi đó.",
      },
      {
        index: "03",
        title: "Số lần xác thực lại là tín hiệu cảnh báo rõ nhất",
        description:
          "Niềm tin và ý định tiếp tục dùng app giảm đều đặn theo từng lần phải làm lại, rõ ràng và dễ theo dõi hơn bất kỳ đặc điểm nhân khẩu học nào như tuổi tác hay giới tính.",
      },
      {
        index: "04",
        title: "Loại thiết bị ảnh hưởng nhiều hơn hồ sơ khách hàng",
        description:
          "Nhóm điện thoại đọc được căn cước gắn chip ngay từ đầu có mức tin tưởng và gắn bó cao hơn rõ rệt. Ngược lại, độ tuổi hầu như không ảnh hưởng đến khả năng khách tự xử lý lỗi.",
      },
    ],
    recommendations: [
      {
        tag: "Ưu tiên 1",
        title: "Giảm phiền phức thao tác bằng cách sửa tận gốc nguyên nhân",
        description:
          "Ghi nhận rõ nguyên nhân mỗi lần xác thực thất bại, do camera, do đọc căn cước, do mạng hay do hết giờ chờ. Giữ lại phần dữ liệu đã hợp lệ thay vì bắt khách làm lại từ đầu. Khi cùng một lỗi lặp lại nhiều lần, tự động chuyển sang hướng dẫn cụ thể thay vì để khách tự thử lại vô hạn.",
      },
      {
        tag: "Ưu tiên 2",
        title: "Giảm lo ngại quyền riêng tư và làm quy trình dễ hiểu hơn",
        description:
          "Hiển thị một dòng thông tin ngắn ngay tại bước xác thực về việc dữ liệu được dùng để làm gì và lưu ở đâu. Mỗi thông báo lỗi cần có ba phần ngắn gọn là nguyên nhân, việc cần làm tiếp theo, và lối thoát nếu thử lại nhiều lần vẫn không được.",
      },
      {
        tag: "Hỗ trợ xuyên suốt",
        title: "Chủ động hỗ trợ nhóm khách chưa biết tự xử lý",
        description:
          "Khi hệ thống phát hiện một khách hàng dừng lại lâu ở một bước, thử lại nhiều lần hoặc lặp lại cùng một loại lỗi, nên tự động gợi ý mở kênh hỗ trợ thay vì để khách tự loay hoay.",
      },
    ],
    recommendationIntro:
      "Bốn trụ cột được tổ chức thành hai Wave dựa trên mức ảnh hưởng đến ý định tiếp tục dùng app và khoảng trống hiệu suất hiện tại, không đơn thuần theo thứ hạng ảnh hưởng riêng lẻ.",
    waves: [
      {
        badge: "1", label: "Wave 1", title: "Giảm ma sát và sửa nơi sinh ra ma sát",
        description: "Nỗ lực xác thực đứng hạng ưu tiên cao nhất trong năm trụ cột, vì vừa ảnh hưởng lớn vừa còn khoảng trống hiệu suất khoảng 51%. Độ ổn định hệ thống được xử lý cùng Wave này dù thứ hạng ưu tiên thấp hơn, vì sự thiếu ổn định của hệ thống có thể chính là nguồn gây ra vòng lặp khiến nỗ lực xác thực tăng lên.",
        branches: [
          { tag: "Hạng ưu tiên 1", title: "Nỗ lực xác thực cảm nhận", description: "Giữ trạng thái đã xác thực khi lỗi xảy ra giữa chừng, không bắt khách làm lại từ đầu." },
          { tag: "Hạng ưu tiên 4", title: "Độ ổn định hệ thống", description: "Giảm lỗi theo thiết bị, camera và mạng, tránh mất trạng thái phiên đang xác thực." },
        ],
      },
      {
        badge: "2", label: "Wave 2", title: "Giảm bất định thông tin, trả lại cảm giác kiểm soát",
        description: "Lo ngại quyền riêng tư đứng hạng ưu tiên thứ hai vì có khoảng trống hiệu suất lớn nhất, khoảng 58%. Minh bạch quy trình đứng hạng thứ ba với khoảng trống khoảng 41%.",
        branches: [
          { tag: "Hạng ưu tiên 2", title: "Quyền riêng tư dữ liệu", description: "Lớp thông tin ngắn ngay tại điểm xác thực về việc dữ liệu dùng để làm gì và lưu ở đâu." },
          { tag: "Hạng ưu tiên 3", title: "Minh bạch quy trình", description: "Thông báo lỗi có ba phần rõ ràng: nguyên nhân, việc cần làm tiếp theo, và lối thoát nếu thử lại nhiều lần vẫn thất bại." },
        ],
      },
      { badge: "5", label: "Duy trì, không cần đầu tư thêm", title: "Giữ nguyên hiệu quả bảo mật cảm nhận", description: "Yếu tố này đứng hạng ưu tiên thấp nhất trong năm trụ cột vì đã gần đạt kỳ vọng, khoảng trống hiệu suất chỉ còn khoảng 28%. Nên duy trì thông điệp ngắn gọn về việc bước xác thực đang bảo vệ điều gì, không thêm thao tác chỉ để trông có vẻ an toàn hơn.", muted: true },
      { badge: "BSE", label: "Xuyên suốt, không phải Wave riêng", title: "Năng lực tự thực hiện là lớp hỗ trợ", description: "Năng lực tự xử lý có vai trò điều tiết chứ không cạnh tranh thứ hạng với bốn trụ cột trên. Hiệu ứng trực tiếp lên ý định tiếp tục rất nhỏ, nhưng mức độ làm dịu tác động xấu của nỗ lực xác thực lại rất rõ rệt. Hệ thống nên dùng tín hiệu này để quyết định khi nào cần chủ động mở hỗ trợ.", muted: true },
    ],
    evidenceTitle: "Cách dữ liệu được kiểm chứng",
    evidence:
      "Mô hình phương trình cấu trúc trên 1.187 quan sát, có kiểm định vai trò điều tiết của năng lực tự xử lý đối với mối liên hệ giữa nỗ lực thao tác và ý định tiếp tục. Toàn bộ giả thuyết chính đều có ý nghĩa thống kê mạnh và mô hình giải thích được phần lớn sự khác biệt về niềm tin giữa các khách hàng.",
    ctaText:
      "Bản đầy đủ có thêm lộ trình triển khai 90 ngày, bộ chỉ số theo dõi và phụ lục phương pháp nghiên cứu.",
  },
  mobifone: {
    theme: "mobifone",
    kicker: "Viễn thông · MobiFone",
    title: "Điểm hài lòng cao, nhưng vẫn có khách âm thầm rời đi",
    summary:
      "450 khách hàng khảo sát trực tiếp, đối chiếu với 2.821 đánh giá thực tế tại 50 cửa hàng trên Google Maps, để kiểm tra điều khách nói trong khảo sát có khớp với điều họ thật sự phàn nàn ngoài đời hay không.",
    context:
      "Thị trường viễn thông Việt Nam đang bước qua giai đoạn tăng trưởng bằng số lượng thuê bao. Chuyển mạng giữ số làm giảm rào cản rời bỏ, khách hàng không cần cắt SIM để thể hiện sự không hài lòng, họ chỉ cần âm thầm chuyển dần data, cuộc gọi hoặc dịch vụ số sang nhà mạng khác. Đây là rủi ro khó nhìn thấy trên báo cáo thuê bao thông thường vì số điện thoại vẫn còn đó, chỉ có mức độ sử dụng là giảm dần.",
    metrics: [
      {
        value: "65%",
        label: "Mức giải thích lòng trung thành từ toàn bộ chuỗi trải nghiệm",
      },
      {
        value: "66.5%",
        label: "Đánh giá tiêu cực trên Google Maps nhắc đến chăm sóc khách hàng",
      },
      {
        value: "4.19/5",
        label: "Điểm hài lòng trung bình, cao nhưng đang che giấu nhiều điểm yếu bên dưới",
      },
    ],
    findings: [
      {
        index: "01",
        title: "Điểm tổng thể cao đang che giấu các bất tiện lặp lại",
        description:
          "Sự hài lòng và lòng trung thành đều trên 4 trên 5, nhưng cả 5 yếu tố tạo nên nó, gồm chất lượng mạng, chăm sóc, giá trị, ứng dụng và tính hữu ích, đều dưới mức kỳ vọng.",
      },
      {
        index: "02",
        title: "Chăm sóc khách hàng là nơi khách thật sự vấp phải vấn đề",
        description:
          "Hai phần ba đánh giá tiêu cực trên Google Maps nhắc đến chăm sóc khách hàng, cao hơn hẳn bất kỳ vấn đề nào khác, xác nhận đúng phát hiện từ khảo sát.",
      },
      {
        index: "03",
        title: "Khách hàng mới là nhóm dễ mất nhất",
        description:
          "Nhóm dùng dưới một năm có điểm hài lòng và trung thành thấp nhất trong mọi nhóm. Một trải nghiệm tệ ở giai đoạn đầu chưa có đủ vốn tín nhiệm để bù đắp.",
      },
      {
        index: "04",
        title: "Giới tính không tạo khác biệt về lòng trung thành",
        description:
          "Nữ giới đánh giá cao hơn về chăm sóc khách hàng, nhưng lòng trung thành giữa hai nhóm không khác biệt. Trung thành không đơn giản chỉ đến từ một trải nghiệm tốt riêng lẻ.",
      },
    ],
    recommendations: [
      {
        tag: "Ưu tiên 1",
        title: "Nâng chất lượng dịch vụ cảm nhận",
        description:
          "Xây SLA rõ ràng cho từng loại yêu cầu hỗ trợ. Dùng dữ liệu hành vi sử dụng để cá nhân hóa gói cước thay vì gửi cùng một ưu đãi cho mọi khách hàng. Minh bạch về vùng phủ sóng và lộ trình nâng cấp mạng để khách biết đâu là khu vực đã tốt và đâu đang cải thiện.",
      },
      {
        tag: "Ưu tiên 2",
        title: "Tối ưu chăm sóc khách hàng, đúng nơi khách phàn nàn nhiều nhất",
        description:
          "Tăng quyền xử lý cho nhân viên tuyến đầu để giải quyết vấn đề ngay trong lần liên hệ đầu tiên. Trang bị hệ thống quản lý khách hàng để nhân viên nhìn thấy lịch sử tương tác, khách không phải kể lại vấn đề nhiều lần.",
      },
      {
        tag: "Xuyên suốt",
        title: "Hành trình chăm sóc riêng cho khách hàng mới trong 6 tháng đầu",
        description:
          "Vì đây là nhóm có điểm hài lòng và trung thành thấp nhất, cần một hành trình có cấu trúc bắt đầu ngay sau kích hoạt, gồm hướng dẫn ngắn, chủ động liên hệ để phát hiện vướng mắc sớm, và một quyền lợi khởi động đủ rõ để khách cảm nhận giá trị ngay từ đầu.",
      },
    ],
    recommendationIntro:
      "Không giống hai nghiên cứu còn lại, báo cáo gốc của MobiFone xếp hạng năm yếu tố theo mức ảnh hưởng đến sự hài lòng thay vì nhóm theo Wave, vì cả năm yếu tố cùng tác động lên một biến trung gian duy nhất là sự hài lòng, không có cấu trúc phân nhánh song song như hai nghiên cứu trên.",
    priorities: [
      { rank: "01", title: "Chất lượng dịch vụ cảm nhận", description: "Ảnh hưởng mạnh nhất đến sự hài lòng. Ưu tiên rút ngắn thời gian phản hồi yêu cầu hỗ trợ.", strength: 100 },
      { rank: "02", title: "Chất lượng chăm sóc khách hàng", description: "Cũng là chủ đề bị nhắc nhiều nhất trong đánh giá tiêu cực thực tế. Ưu tiên giải quyết ngay lần liên hệ đầu tiên.", strength: 86 },
      { rank: "03", title: "Giá trị cảm nhận", description: "Khách chưa thấy rõ lợi thế cạnh tranh so với nhà mạng khác. Cần truyền thông giá trị tổng thể, không chỉ giá cước.", strength: 77 },
      { rank: "04", title: "Tính dễ sử dụng", description: "Rà soát ứng dụng theo các tác vụ có tần suất cao nhất để giảm số bước thao tác.", strength: 67 },
      { rank: "05", title: "Tính hữu ích", description: "Chỉ bổ sung tính năng khi tính năng đó thực sự được dùng lặp lại, tránh làm ứng dụng nặng hơn.", strength: 53 },
    ],
    maintain: {
      tag: "Giải pháp xuyên suốt",
      title: "Chăm sóc riêng cho khách hàng mới trong 6 tháng đầu",
      description: "Vì đây là nhóm có điểm hài lòng và trung thành thấp nhất trong mọi nhóm thời gian sử dụng, cần một hành trình có cấu trúc bắt đầu ngay sau kích hoạt, gồm hướng dẫn ngắn, chủ động liên hệ để phát hiện vướng mắc sớm, và một quyền lợi khởi động đủ rõ để khách cảm nhận giá trị ngay từ đầu.",
    },
    evidenceTitle: "Cách dữ liệu được kiểm chứng",
    evidence:
      "Kết quả kết hợp hai nguồn độc lập, khảo sát định lượng 450 khách hàng bằng hồi quy tuyến tính, và đối chiếu 2.821 đánh giá công khai tại 50 cửa hàng trên Google Maps. Việc hai nguồn dữ liệu khác nhau cùng chỉ về một vấn đề, chăm sóc khách hàng, làm tăng đáng kể độ tin cậy của phát hiện này so với chỉ dựa vào một khảo sát đơn lẻ.",
    ctaText:
      "Bản đầy đủ có thêm bảng đối chiếu Google Maps chi tiết, bộ chỉ số theo dõi và phụ lục phương pháp nghiên cứu.",
  },
};
