// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    console.log('햄스터 팀 페이지가 로드되었습니다!');
});

// 멤버 카드 hover 효과
document.querySelectorAll('.member-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        // 다른 카드들 투명도 감소
        document.querySelectorAll('.member-card').forEach(otherCard => {
            if (otherCard !== this) {
                otherCard.style.opacity = '0.3';
            }
        });
    });
    
    card.addEventListener('mouseleave', function() {
        // 모든 카드 투명도 복원
        document.querySelectorAll('.member-card').forEach(otherCard => {
            otherCard.style.opacity = '1';
        });
    });
    
    // 키보드 접근성
    card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            console.log('팀원 선택:', this.querySelector('.member-name').textContent);
        }
    });
});

// 카드에 tabindex 추가 (키보드 접근성)
document.querySelectorAll('.member-card').forEach((card, index) => {
    card.setAttribute('tabindex', index + 1);
});

// 스크롤에 따른 휠 회전
const wheel = document.querySelector('.wheel-background');

// 휠이 존재하는 경우에만 스크롤 이벤트 리스너 추가
if (wheel) {
    let ticking = false;

    function rotateWheelOnScroll() {
        // 스크롤 위치에 따라 회전 각도 계산 (숫자를 조정하여 속도 변경 가능)
        const rotation = window.scrollY * 0.2;
        wheel.style.transform = `rotate(${rotation}deg)`;
        ticking = false;
    }

    document.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(rotateWheelOnScroll);
            ticking = true;
        }
    });
}