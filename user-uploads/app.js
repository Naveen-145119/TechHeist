// Events data
const eventsData = {
  "itEvents": [
    {
      "id": "hack24",
      "name": "24-Hour Hackathon",
      "description": "Build innovative solutions in 24 hours with your team",
      "category": "IT",
      "date": "2025-10-15",
      "time": "09:00 AM",
      "venue": "Computer Lab A",
      "entryFee": 200,
      "maxTeamSize": 4,
      "minTeamSize": 2,
      "whatsappLink": "https://wa.me/1234567890",
      "prizes": "₹25,000 for winners"
    },
    {
      "id": "codewar",
      "name": "Code War",
      "description": "Competitive programming challenge for coding ninjas",
      "category": "IT",
      "date": "2025-10-16",
      "time": "02:00 PM",
      "venue": "Auditorium",
      "entryFee": 150,
      "maxTeamSize": 1,
      "minTeamSize": 1,
      "whatsappLink": "https://wa.me/1234567890",
      "prizes": "₹15,000 for top coders"
    },
    {
      "id": "webdev",
      "name": "Web Development Sprint",
      "description": "Create stunning websites in limited time",
      "category": "IT",
      "date": "2025-10-17",
      "time": "10:00 AM",
      "venue": "Computer Lab B",
      "entryFee": 180,
      "maxTeamSize": 3,
      "minTeamSize": 1,
      "whatsappLink": "https://wa.me/1234567890",
      "prizes": "₹20,000 total prize pool"
    },
    {
      "id": "cybersec",
      "name": "Cybersecurity Challenge",
      "description": "Test your hacking and security skills",
      "category": "IT",
      "date": "2025-10-18",
      "time": "11:00 AM",
      "venue": "Security Lab",
      "entryFee": 250,
      "maxTeamSize": 2,
      "minTeamSize": 1,
      "whatsappLink": "https://wa.me/1234567890",
      "prizes": "₹30,000 for ethical hackers"
    }
  ],
  "nonItEvents": [
    {
      "id": "photography",
      "name": "Photography Contest",
      "description": "Capture the perfect moment through your lens",
      "category": "Non-IT",
      "date": "2025-10-15",
      "time": "08:00 AM",
      "venue": "Campus Grounds",
      "entryFee": 100,
      "maxTeamSize": 1,
      "minTeamSize": 1,
      "whatsappLink": "https://wa.me/1234567890",
      "prizes": "₹10,000 for best shots"
    },
    {
      "id": "dance",
      "name": "Cultural Dance Battle",
      "description": "Showcase your cultural dance forms",
      "category": "Non-IT",
      "date": "2025-10-16",
      "time": "06:00 PM",
      "venue": "Main Stage",
      "entryFee": 300,
      "maxTeamSize": 8,
      "minTeamSize": 4,
      "whatsappLink": "https://wa.me/1234567890",
      "prizes": "₹35,000 total rewards"
    },
    {
      "id": "music",
      "name": "Battle of Bands",
      "description": "Rock the stage with your musical talent",
      "category": "Non-IT",
      "date": "2025-10-17",
      "time": "07:00 PM",
      "venue": "Open Air Theater",
      "entryFee": 500,
      "maxTeamSize": 6,
      "minTeamSize": 3,
      "whatsappLink": "https://wa.me/1234567890",
      "prizes": "₹50,000 for musical maestros"
    },
    {
      "id": "drama",
      "name": "Theater Drama",
      "description": "Perform compelling stories on stage",
      "category": "Non-IT",
      "date": "2025-10-18",
      "time": "05:00 PM",
      "venue": "Drama Hall",
      "entryFee": 400,
      "maxTeamSize": 10,
      "minTeamSize": 5,
      "whatsappLink": "https://wa.me/1234567890",
      "prizes": "₹25,000 for dramatic excellence"
    }
  ]
};

// Global state
let currentUser = null;
let selectedEvent = null;
let registrationData = {
  personal: {},
  team: [],
  totalAmount: 0
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    renderEvents();
    checkUserSession();
}

function setupEventListeners() {
    // DOM Elements
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const exploreBtn = document.getElementById('explore-btn');
    const loginBtn = document.getElementById('login-btn');
    const registerHeroBtn = document.getElementById('register-hero-btn');

    // Modal elements
    const authModal = document.getElementById('auth-modal');
    const registrationModal = document.getElementById('registration-modal');
    const authClose = document.getElementById('auth-close');
    const registrationClose = document.getElementById('registration-close');

    // Form elements
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');

    // User status
    const logoutBtn = document.getElementById('logout-btn');

    // Navigation
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const eventsSection = document.getElementById('events');
            if (eventsSection) {
                eventsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Authentication buttons
    if (loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openModal('auth');
        });
    }
    
    if (registerHeroBtn) {
        registerHeroBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openModal('auth');
        });
    }

    // Modal close buttons
    if (authClose) {
        authClose.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal('auth');
        });
    }
    
    if (registrationClose) {
        registrationClose.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal('registration');
        });
    }
    
    // Auth form switching
    if (showRegister) {
        showRegister.addEventListener('click', function(e) {
            e.preventDefault();
            switchAuthForm('register');
        });
    }
    
    if (showLogin) {
        showLogin.addEventListener('click', function(e) {
            e.preventDefault();
            switchAuthForm('login');
        });
    }
    
    // Auth form submissions
    const loginFormElement = document.getElementById('login-form-element');
    const registerFormElement = document.getElementById('register-form-element');
    
    if (loginFormElement) {
        loginFormElement.addEventListener('submit', handleLogin);
    }
    
    if (registerFormElement) {
        registerFormElement.addEventListener('submit', handleRegister);
    }
    
    // Logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
    
    // Registration steps
    const nextToStep2Btn = document.getElementById('next-to-step-2');
    const nextToStep3Btn = document.getElementById('next-to-step-3');
    const backToStep1Btn = document.getElementById('back-to-step-1');
    const backToStep2Btn = document.getElementById('back-to-step-2');
    const payNowBtn = document.getElementById('pay-now-btn');
    const closeSuccessBtn = document.getElementById('close-success');
    
    if (nextToStep2Btn) nextToStep2Btn.addEventListener('click', nextToStep2);
    if (nextToStep3Btn) nextToStep3Btn.addEventListener('click', nextToStep3);
    if (backToStep1Btn) backToStep1Btn.addEventListener('click', backToStep1);
    if (backToStep2Btn) backToStep2Btn.addEventListener('click', backToStep2);
    if (payNowBtn) payNowBtn.addEventListener('click', handlePayment);
    if (closeSuccessBtn) closeSuccessBtn.addEventListener('click', () => closeModal('registration'));
    
    // Event categories
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            filterEvents(e.target.dataset.category);
        });
    });
    
    // Modal overlays
    if (authModal) {
        const authOverlay = authModal.querySelector('.modal-overlay');
        if (authOverlay) {
            authOverlay.addEventListener('click', () => closeModal('auth'));
        }
    }
    
    if (registrationModal) {
        const regOverlay = registrationModal.querySelector('.modal-overlay');
        if (regOverlay) {
            regOverlay.addEventListener('click', () => closeModal('registration'));
        }
    }
}

function toggleMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

function openModal(modalType) {
    if (modalType === 'auth') {
        const authModal = document.getElementById('auth-modal');
        if (authModal) {
            authModal.classList.remove('hidden');
            switchAuthForm('login');
        }
    } else if (modalType === 'registration') {
        const registrationModal = document.getElementById('registration-modal');
        if (registrationModal) {
            registrationModal.classList.remove('hidden');
            resetRegistrationModal();
        }
    }
}

function closeModal(modalType) {
    if (modalType === 'auth') {
        const authModal = document.getElementById('auth-modal');
        if (authModal) {
            authModal.classList.add('hidden');
        }
    } else if (modalType === 'registration') {
        const registrationModal = document.getElementById('registration-modal');
        if (registrationModal) {
            registrationModal.classList.add('hidden');
            resetRegistrationModal();
        }
    }
}

function switchAuthForm(formType) {
    const loginFormDiv = document.getElementById('login-form');
    const registerFormDiv = document.getElementById('register-form');
    
    if (loginFormDiv && registerFormDiv) {
        if (formType === 'login') {
            loginFormDiv.classList.remove('hidden');
            registerFormDiv.classList.add('hidden');
        } else {
            loginFormDiv.classList.add('hidden');
            registerFormDiv.classList.remove('hidden');
        }
    }
}

function handleLogin(e) {
    e.preventDefault();
    const inputs = e.target.querySelectorAll('input');
    const email = inputs[0].value;
    
    if (!email) {
        showNotification('Please enter your email', 'error');
        return;
    }
    
    // Simulate login
    currentUser = {
        email: email,
        name: email.split('@')[0]
    };
    
    updateUserStatus();
    closeModal('auth');
    showNotification('Login successful!', 'success');
}

function handleRegister(e) {
    e.preventDefault();
    const inputs = e.target.querySelectorAll('input');
    const name = inputs[0].value;
    const email = inputs[1].value;
    
    if (!name || !email) {
        showNotification('Please fill all required fields', 'error');
        return;
    }
    
    // Simulate registration
    currentUser = {
        email: email,
        name: name
    };
    
    updateUserStatus();
    closeModal('auth');
    showNotification('Registration successful!', 'success');
}

function handleLogout() {
    currentUser = null;
    updateUserStatus();
    showNotification('Logged out successfully!', 'success');
}

function updateUserStatus() {
    const userStatus = document.getElementById('user-status');
    const userName = document.getElementById('user-name');
    const loginBtn = document.getElementById('login-btn');
    
    if (currentUser && userStatus && userName && loginBtn) {
        userName.textContent = currentUser.name;
        userStatus.classList.remove('hidden');
        loginBtn.style.display = 'none';
    } else if (userStatus && loginBtn) {
        userStatus.classList.add('hidden');
        loginBtn.style.display = 'inline-flex';
    }
}

function checkUserSession() {
    // Check if user was previously logged in (simulate)
    try {
        const savedUser = localStorage.getItem('techheist_user');
        if (savedUser) {
            currentUser = JSON.parse(savedUser);
            updateUserStatus();
        }
    } catch (e) {
        // Handle localStorage errors silently
        console.log('localStorage not available');
    }
}

function renderEvents() {
    const itEventsGrid = document.getElementById('it-events-grid');
    const nonItEventsGrid = document.getElementById('non-it-events-grid');
    
    if (itEventsGrid) {
        itEventsGrid.innerHTML = eventsData.itEvents.map(event => createEventCard(event)).join('');
    }
    
    if (nonItEventsGrid) {
        nonItEventsGrid.innerHTML = eventsData.nonItEvents.map(event => createEventCard(event)).join('');
    }
    
    // Add event listeners to register buttons
    setTimeout(() => {
        document.querySelectorAll('.register-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const eventId = e.target.dataset.eventId;
                handleEventRegistration(eventId);
            });
        });
    }, 100);
}

function createEventCard(event) {
    const teamText = event.minTeamSize === event.maxTeamSize 
        ? `${event.minTeamSize} member${event.minTeamSize > 1 ? 's' : ''}`
        : `${event.minTeamSize}-${event.maxTeamSize} members`;
    
    return `
        <div class="event-card">
            <div class="event-header">
                <div>
                    <h3 class="event-name">${event.name}</h3>
                    <span class="event-category">${event.category}</span>
                </div>
            </div>
            <p class="event-description">${event.description}</p>
            <div class="event-details">
                <div class="event-detail">
                    <strong>Date:</strong> ${formatDate(event.date)}
                </div>
                <div class="event-detail">
                    <strong>Time:</strong> ${event.time}
                </div>
                <div class="event-detail">
                    <strong>Venue:</strong> ${event.venue}
                </div>
                <div class="event-detail">
                    <strong>Team:</strong> ${teamText}
                </div>
                <div class="event-detail">
                    <strong>Fee:</strong> ₹${event.entryFee}
                </div>
                <div class="event-detail">
                    <strong>Prizes:</strong> ${event.prizes}
                </div>
            </div>
            <div class="event-actions">
                <button class="btn btn--primary register-btn" data-event-id="${event.id}">REGISTER</button>
                <a href="${event.whatsappLink}" target="_blank" class="whatsapp-link">📱 WhatsApp</a>
            </div>
        </div>
    `;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

function filterEvents(category) {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const itEventsSection = document.getElementById('it-events');
    const nonItEventsSection = document.getElementById('non-it-events');
    
    // Update active button
    categoryBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
    
    // Show/hide event sections
    if (itEventsSection && nonItEventsSection) {
        if (category === 'all') {
            itEventsSection.style.display = 'block';
            nonItEventsSection.style.display = 'block';
        } else if (category === 'it') {
            itEventsSection.style.display = 'block';
            nonItEventsSection.style.display = 'none';
        } else if (category === 'non-it') {
            itEventsSection.style.display = 'none';
            nonItEventsSection.style.display = 'block';
        }
    }
}

function handleEventRegistration(eventId) {
    if (!currentUser) {
        openModal('auth');
        return;
    }
    
    // Find the event
    selectedEvent = [...eventsData.itEvents, ...eventsData.nonItEvents].find(e => e.id === eventId);
    
    if (selectedEvent) {
        openModal('registration');
        populateEventInfo();
        resetRegistrationData();
    }
}

function populateEventInfo() {
    const eventInfoDiv = document.getElementById('selected-event-info');
    if (eventInfoDiv && selectedEvent) {
        eventInfoDiv.innerHTML = `
            <h3>${selectedEvent.name}</h3>
            <p><strong>Date:</strong> ${formatDate(selectedEvent.date)} at ${selectedEvent.time}</p>
            <p><strong>Venue:</strong> ${selectedEvent.venue}</p>
            <p><strong>Entry Fee:</strong> ₹${selectedEvent.entryFee} per person</p>
            <p><strong>Team Size:</strong> ${selectedEvent.minTeamSize === selectedEvent.maxTeamSize 
                ? `${selectedEvent.minTeamSize} member${selectedEvent.minTeamSize > 1 ? 's' : ''}`
                : `${selectedEvent.minTeamSize}-${selectedEvent.maxTeamSize} members`}</p>
        `;
    }
    
    // Update team requirements
    const teamReqElement = document.getElementById('team-requirements');
    if (teamReqElement && selectedEvent) {
        teamReqElement.textContent = `Team size: ${selectedEvent.minTeamSize}-${selectedEvent.maxTeamSize} members`;
    }
}

function resetRegistrationModal() {
    // Show step 1, hide others
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const step3 = document.getElementById('step-3');
    const paymentSuccess = document.getElementById('payment-success');
    
    if (step1) step1.classList.remove('hidden');
    if (step2) step2.classList.add('hidden');
    if (step3) step3.classList.add('hidden');
    if (paymentSuccess) paymentSuccess.classList.add('hidden');
    
    // Reset forms
    const personalForm = document.getElementById('personal-details-form');
    if (personalForm) personalForm.reset();
    
    resetRegistrationData();
}

function resetRegistrationData() {
    registrationData = {
        personal: {},
        team: [],
        totalAmount: 0
    };
}

function nextToStep2() {
    const form = document.getElementById('personal-details-form');
    if (!form) return;
    
    const formData = new FormData(form);
    
    // Validate form
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    // Save personal data
    registrationData.personal = {
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        college: formData.get('college')
    };
    
    // Initialize team with leader
    registrationData.team = [{
        name: registrationData.personal.fullName,
        email: registrationData.personal.email,
        phone: registrationData.personal.phone,
        isLeader: true
    }];
    
    // Show step 2
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    
    if (step1) step1.classList.add('hidden');
    if (step2) step2.classList.remove('hidden');
    
    updateTeamDisplay();
    updateCurrentTeamSize();
}

function backToStep1() {
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    
    if (step1) step1.classList.remove('hidden');
    if (step2) step2.classList.add('hidden');
}

function nextToStep3() {
    if (!selectedEvent) return;
    
    // Validate team size
    if (registrationData.team.length < selectedEvent.minTeamSize || 
        registrationData.team.length > selectedEvent.maxTeamSize) {
        showNotification(`Team size must be between ${selectedEvent.minTeamSize} and ${selectedEvent.maxTeamSize} members`, 'error');
        return;
    }
    
    // Calculate total amount
    registrationData.totalAmount = selectedEvent.entryFee * registrationData.team.length;
    
    // Show step 3
    const step2 = document.getElementById('step-2');
    const step3 = document.getElementById('step-3');
    
    if (step2) step2.classList.add('hidden');
    if (step3) step3.classList.remove('hidden');
    
    updatePaymentSummary();
}

function backToStep2() {
    const step2 = document.getElementById('step-2');
    const step3 = document.getElementById('step-3');
    
    if (step2) step2.classList.remove('hidden');
    if (step3) step3.classList.add('hidden');
}

function updateTeamDisplay() {
    const teamMembersDiv = document.getElementById('team-members');
    const leaderDetailsDiv = document.getElementById('leader-details');
    
    if (!teamMembersDiv || !leaderDetailsDiv) return;
    
    // Update leader details
    leaderDetailsDiv.innerHTML = `
        <p><strong>Name:</strong> ${registrationData.personal.fullName}</p>
        <p><strong>Email:</strong> ${registrationData.personal.email}</p>
        <p><strong>Phone:</strong> ${registrationData.personal.phone}</p>
    `;
    
    // Clear existing additional members
    const additionalMembers = teamMembersDiv.querySelectorAll('.team-member:not(:first-child)');
    additionalMembers.forEach(member => member.remove());
    
    // Add team members (excluding leader)
    registrationData.team.slice(1).forEach((member, index) => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'team-member';
        memberDiv.innerHTML = `
            <h4>Team Member ${index + 2}</h4>
            <div class="member-details">
                <p><strong>Name:</strong> ${member.name}</p>
                <p><strong>Email:</strong> ${member.email}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
            </div>
            <button type="button" class="remove-member" onclick="removeMember(${index + 1})">Remove</button>
        `;
        teamMembersDiv.appendChild(memberDiv);
    });
    
    updateAddMemberSection();
}

function updateCurrentTeamSize() {
    const currentTeamSizeElement = document.getElementById('current-team-size');
    if (currentTeamSizeElement) {
        currentTeamSizeElement.textContent = registrationData.team.length;
    }
}

function updateAddMemberSection() {
    const addMemberSection = document.getElementById('add-member-section');
    if (!addMemberSection || !selectedEvent) return;
    
    const canAddMore = registrationData.team.length < selectedEvent.maxTeamSize;
    
    if (canAddMore) {
        addMemberSection.innerHTML = `
            <div class="member-form" id="new-member-form" style="display: none;">
                <input type="text" class="form-control" placeholder="Full Name" id="member-name">
                <input type="email" class="form-control" placeholder="Email" id="member-email">
                <input type="tel" class="form-control" placeholder="Phone" id="member-phone">
                <div></div>
                <button type="button" class="btn btn--primary" onclick="saveMember()">Save</button>
                <button type="button" class="btn btn--outline" onclick="cancelAddMember()">Cancel</button>
            </div>
            <button type="button" class="btn btn--outline" id="add-member-btn" onclick="showAddMemberForm()">+ ADD TEAM MEMBER</button>
        `;
    } else {
        addMemberSection.innerHTML = '<p style="color: #6B7280;">Maximum team size reached</p>';
    }
}

function showAddMemberForm() {
    const newMemberForm = document.getElementById('new-member-form');
    const addMemberBtn = document.getElementById('add-member-btn');
    
    if (newMemberForm) newMemberForm.style.display = 'grid';
    if (addMemberBtn) addMemberBtn.style.display = 'none';
}

function cancelAddMember() {
    const newMemberForm = document.getElementById('new-member-form');
    const addMemberBtn = document.getElementById('add-member-btn');
    
    if (newMemberForm) newMemberForm.style.display = 'none';
    if (addMemberBtn) addMemberBtn.style.display = 'block';
    
    clearMemberForm();
}

function saveMember() {
    const name = document.getElementById('member-name')?.value.trim();
    const email = document.getElementById('member-email')?.value.trim();
    const phone = document.getElementById('member-phone')?.value.trim();
    
    if (!name || !email || !phone) {
        showNotification('Please fill all member details', 'error');
        return;
    }
    
    // Add to team
    registrationData.team.push({
        name: name,
        email: email,
        phone: phone,
        isLeader: false
    });
    
    updateTeamDisplay();
    updateCurrentTeamSize();
    clearMemberForm();
}

function clearMemberForm() {
    const memberName = document.getElementById('member-name');
    const memberEmail = document.getElementById('member-email');
    const memberPhone = document.getElementById('member-phone');
    
    if (memberName) memberName.value = '';
    if (memberEmail) memberEmail.value = '';
    if (memberPhone) memberPhone.value = '';
}

function removeMember(index) {
    registrationData.team.splice(index, 1);
    updateTeamDisplay();
    updateCurrentTeamSize();
}

function updatePaymentSummary() {
    const summaryDetails = document.getElementById('summary-details');
    const totalAmount = document.getElementById('total-amount');
    
    if (!summaryDetails || !totalAmount || !selectedEvent) return;
    
    summaryDetails.innerHTML = `
        <p><span>Event:</span><span>${selectedEvent.name}</span></p>
        <p><span>Team Size:</span><span>${registrationData.team.length} members</span></p>
        <p><span>Entry Fee per person:</span><span>₹${selectedEvent.entryFee}</span></p>
        <p><span>Team Leader:</span><span>${registrationData.personal.fullName}</span></p>
        ${registrationData.team.length > 1 ? 
            `<p><span>Team Members:</span><span>${registrationData.team.slice(1).map(m => m.name).join(', ')}</span></p>` 
            : ''
        }
    `;
    
    totalAmount.textContent = registrationData.totalAmount;
}

function handlePayment() {
    // Simulate payment processing
    showNotification('Processing payment...', 'info');
    
    setTimeout(() => {
        // Generate registration ID
        const registrationId = 'TH' + Date.now().toString().substr(-6);
        const registrationIdElement = document.getElementById('registration-id');
        
        if (registrationIdElement) {
            registrationIdElement.textContent = registrationId;
        }
        
        // Show success step
        const step3 = document.getElementById('step-3');
        const paymentSuccess = document.getElementById('payment-success');
        
        if (step3) step3.classList.add('hidden');
        if (paymentSuccess) paymentSuccess.classList.remove('hidden');
        
        // Save user data (simulate)
        if (currentUser) {
            try {
                localStorage.setItem('techheist_user', JSON.stringify(currentUser));
            } catch (e) {
                console.log('localStorage not available');
            }
        }
        
        showNotification('Payment successful! Registration completed.', 'success');
    }, 2000);
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#DC2626'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `;
    notification.textContent = message;
    
    // Add animation styles if not already present
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.getElementById('nav-menu');
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        }
    }
});

// Global functions for inline event handlers
window.removeMember = removeMember;
window.showAddMemberForm = showAddMemberForm;
window.cancelAddMember = cancelAddMember;
window.saveMember = saveMember;