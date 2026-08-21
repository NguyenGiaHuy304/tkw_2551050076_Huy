# web-portfolio-project
Home	    index.html
About	    pages/about.html
Skills	    pages/skills.html
Projects	pages/projects.html
Blog	    pages/blog.html
Contact	    pages/contact.html



# Trang chủ
Trang chủ là trang đầu tiên người dùng nhìn thấy khi truy cập website. Trang này có nhiệm vụ giới thiệu nhanh lập trình viên và dẫn người dùng đến các phần quan trọng khác.

Nội dung chính của trang chủ:

Header và navbar.
Hero section với tên, vai trò và mô tả ngắn.
Nút CTA dẫn đến Projects và Contact.
Giới thiệu ngắn về bản thân.
Kỹ năng nổi bật.
Dự án nổi bật.
Blog hoặc bài viết mới nhất.
Footer.

Phạm vi chức năng:

Hiển thị theme hiện tại.
Có nút dark/light mode.
Có hiệu ứng scroll-reveal cho các section.
Có liên kết đến các trang con.


# Trang Giới thiệu
Trang Giới thiệu tập trung trình bày thông tin cá nhân, định hướng học tập và mục tiêu nghề nghiệp.

Nội dung chính:

Giới thiệu bản thân.
Mục tiêu nghề nghiệp.
Quá trình học tập.
Định hướng phát triển kỹ năng.
Có thể có timeline hoặc card thông tin cá nhân.

Phạm vi chức năng:

Có layout responsive.
Có hiệu ứng scroll-reveal.
Có hình ảnh hoặc avatar kèm alt text.
Không yêu cầu xử lý dữ liệu phức tạp.


# Trang Kỹ năng / Dịch vụ
Trang này trình bày các kỹ năng kỹ thuật và dịch vụ mà lập trình viên có thể thực hiện.

Nội dung chính:

Danh sách kỹ năng frontend.
Danh sách kỹ năng công cụ.
Dịch vụ có thể cung cấp như xây dựng landing page, responsive UI, portfolio website.
Các skill card hoặc service card.

Phạm vi chức năng:

Hiển thị card kỹ năng.
Có thể dùng icon công nghệ.
Có hiệu ứng scroll-reveal cho từng card.
Responsive dạng grid trên desktop, tablet và mobile.


# Trang Dự án
Trang Dự án là một trong các trang quan trọng nhất vì thể hiện sản phẩm thực tế và có chức năng JavaScript lọc dự án.

Nội dung chính:

Tiêu đề trang.
Mô tả ngắn về các dự án.
Bộ lọc theo tag/công nghệ.
Danh sách project card.
Mỗi card gồm tên dự án, ảnh, mô tả ngắn, công nghệ và nút xem chi tiết.

Phạm vi chức năng:

Lọc dự án theo tag.
Có thể render dữ liệu từ file JSON nội bộ.
Mỗi project dẫn đến trang Project Detail.
Responsive project grid theo 1 cột, 2 cột hoặc 3 cột tùy màn hình.


# Trang Chi tiết dự án
Trang Chi tiết dự án cung cấp thông tin đầy đủ hơn về một dự án cụ thể.

Nội dung chính:

Tên dự án.
Ảnh hoặc screenshot dự án.
Mô tả tổng quan.
Mục tiêu dự án.
Công nghệ sử dụng.
Tính năng chính.
Vai trò thực hiện.
Link demo và link GitHub nếu có.
Nút quay lại Projects.

Phạm vi chức năng:

Có thể lấy dữ liệu dự án dựa trên id từ URL.
Có thể dùng dữ liệu tĩnh nếu phạm vi nhóm đơn giản hơn.
Cần có layout rõ ràng và dễ đọc.
Cần liên kết ngược về trang Projects.


# Trang Blog
Trang Blog dùng để hiển thị các bài viết hoặc ghi chú ngắn liên quan đến học tập, lập trình và thiết kế web.

Nội dung chính:

Danh sách bài viết.
Blog card gồm tiêu đề, ngày đăng, mô tả ngắn và ảnh minh họa.
Có thể có tag như HTML, CSS, JavaScript, UI/UX.

Phạm vi chức năng:

Có thể render blog từ file JSON nội bộ.
Có thể chỉ hiển thị danh sách bài viết ở mức cơ bản.
Responsive blog card trên nhiều kích thước màn hình.
Không yêu cầu hệ thống quản trị bài viết.


# Trang Liên hệ
Trang Liên hệ cung cấp form để người dùng gửi thông tin liên hệ.

Nội dung chính:

Thông tin liên hệ.
Form gồm họ tên, email, tiêu đề và nội dung.
Social links như GitHub, LinkedIn, Email.
Thông báo lỗi hoặc thành công khi gửi form.

Phạm vi chức năng:

Validate tên không được rỗng.
Validate email đúng định dạng.
Validate subject không được rỗng.
Validate message đủ độ dài.
Hiển thị thông báo lỗi nếu nhập sai.
Hiển thị thông báo thành công nếu dữ liệu hợp lệ.
Không gửi email thật vì project không có backend.


# Phạm vi chức năng JavaScript theo từng trang
Chức năng	                           Trang áp dụng	                       Mục đích
Dark/light mode	                       Toàn bộ website	            Cho phép người dùng đổi theme và lưu lựa chọn.
Project filter	                        Projects	                Lọc dự án theo công nghệ hoặc tag.
Scroll reveal	    Home, About, Skills, Projects, Blog, Contact	Tạo hiệu ứng xuất hiện khi cuộn trang.
Form validation	                        Contact	                    Kiểm tra dữ liệu form liên hệ.
Fetch JSON	                        Projects, Blog	                Quản lý dữ liệu dự án/blog rõ ràng hơn.


# Kế hoạch thực hiện
Giai đoạn 1: Phân tích yêu cầu
Đọc yêu cầu đề bài.
Xác định số trang cần xây dựng.
Xác định đối tượng người dùng.
Lập sitemap.
Xác định nội dung từng trang.
Xác định chức năng JavaScript.
Xác định công nghệ sử dụng.

Giai đoạn 2: Phân tích Figma
Xác định màu sắc chính.
Xác định font chữ và typography.
Xác định spacing, button, card, icon.
Phân tích layout từng trang.
Chuyển style guide thành CSS variables và component classes.

Giai đoạn 3: Xây dựng cấu trúc project
Tạo project với Vite + npm.
Tạo cấu trúc thư mục.
Tạo các file HTML tương ứng với sitemap.
Tạo thư mục CSS, JS, data và assets.
Thiết lập Git/GitHub.

Giai đoạn 4: Xây dựng giao diện
Code HTML semantic cho từng trang.
Tạo CSS/Tailwind theo Figma.
Tạo component dùng chung như navbar, footer, button, card.
Hoàn thiện layout desktop.

Giai đoạn 5: Responsive
Điều chỉnh giao diện cho tablet.
Điều chỉnh giao diện cho mobile.
Kiểm tra navbar, grid, card, form và footer.
Sửa lỗi tràn layout.

Giai đoạn 6: Lập trình JavaScript
Làm dark/light mode.
Làm project filter.
Làm scroll reveal.
Làm form validation.
Làm fetch JSON nếu sử dụng.

Giai đoạn 7: Kiểm thử và tối ưu
Kiểm tra link điều hướng.
Kiểm tra JavaScript.
Kiểm tra responsive.
Kiểm tra console error.
Kiểm tra SEO cơ bản.
Chạy Lighthouse.
Sửa lỗi accessibility và performance.

Giai đoạn 8: Triển khai và hoàn thiện nộp bài
Build project.
Deploy lên Vercel, Netlify hoặc GitHub Pages.
Viết README.
Chụp ảnh đối chiếu Figma và website.
Hoàn thiện báo cáo.
Quay video demo.


# Phân công nhiệm vụ dự kiến
	Core layout, Home, Projects, Project Detail	
    Tạo cấu trúc project, layout chung, trang chủ, trang dự án, chi tiết dự án, dark/light mode, filter project, deploy.

	About, Skills/Services, Scroll reveal	
    Xây dựng trang giới thiệu, trang kỹ năng/dịch vụ, hiệu ứng scroll reveal, assets/icon liên quan, responsive phần phụ trách.

	Blog, Contact, Form validation	
    Xây dựng trang blog, trang liên hệ, form validation, dữ liệu blog, kiểm thử form, README và hỗ trợ báo cáo.



# UI KIT

Mục tiêu là chuyển UI Kit này thành:
CSS variables
Typography classes
Reusable component classes
SVG assets
JavaScript interactions

# Color
Màu	Vai trò trong giao diện
BG 1	Màu nền chính của website
BG 2	Màu nền phụ, dùng cho header/card/section tối
Brand 1	Màu nhấn chính, dùng cho button, link, highlight
Brand 2	Màu nhấn phụ, hover hoặc background nhẹ
Grey	Viền, text phụ, card phụ
White	Text chính trên nền tối
HTML/CSS/JS/React	Màu nhận diện công nghệ trong skill/project tag

# Typography
Ubuntu
Dùng cho:
Heading lớn
Button
Paragraph chính
Article text
Label

IBM Plex Mono
Dùng cho:
Logo
Menu
Code-like text
Number
Small technical text

# icons
GitHub
LinkedIn
Email
Menu
Close
Search
Arrow
External link
HTML
CSS
JavaScript
React nếu dùng như skill

# components
Button
Module Title
Blog Column

# interactions
Header - Search
Navigation Bar
Default State
Hover State



5.1. Header - Search

Header có thể gồm:

Logo
Menu
Search icon/input
Social icons
Theme toggle

Với project của bạn, header nên có:

Logo
Navigation links
Dark/light toggle
Mobile menu

Search có thể làm đơn giản hoặc bỏ nếu không cần, vì đề Portfolio không bắt buộc search.

5.2. Navigation Bar

Navigation bar là component bắt buộc vì website có nhiều trang.

Cần có trạng thái:

Default
Hover
Active
Mobile collapsed

Nên tạo các class:

.site-header
.site-nav
.nav-link
.nav-link-active
.mobile-menu
5.3. Hover State

Các thành phần cần hover:

Navbar link
Button
Project card
Blog card
Social icon
Filter button

Ví dụ:

.nav-link:hover {
  color: var(--color-brand-1);
}