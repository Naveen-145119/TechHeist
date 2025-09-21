import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import techheistLogo from '../assets/techheist-logo.png';
import { account } from '../appwriteConfig'; // Import Appwrite account

const RegisterPage = ({ login }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // The other form fields are not needed by Appwrite for basic registration
  // but you can add them back if you store them in an Appwrite database later.

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      // Correct: Use Appwrite SDK to create a user account
      await account.create('unique()', email, password, fullName);
      
      // Automatically log the user in after successful registration
      await account.createEmailSession(email, password);
      const userProfile = await account.get();
      
      login(userProfile);
      navigate('/'); // Redirect to homepage
    } catch (err) {
      // Catch errors from Appwrite
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img 
            src={techheistLogo} 
            alt="TECHHEIST" 
            className="h-16 w-auto mx-auto mb-4 techheist-logo"
          />
          <h1 className="text-3xl font-bold text-gradient">Join TECHHEIST</h1>
          <p className="text-muted-foreground">Create your account to participate</p>
        </div>

        <Card className="event-card bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Register</CardTitle>
            <CardDescription>
              Fill in your details to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-2 rounded">
                  {error}
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Note: Phone Number and College Name are not part of Appwrite's default user object.
                  You would need to store these in a separate database collection if needed. */}
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full btn-primary" 
                disabled={loading}
              >
                {loading ? 'Creating Account...' : 'REGISTER'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link to="/login" className="text-primary hover:underline">
                  Login here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default RegisterPage;
