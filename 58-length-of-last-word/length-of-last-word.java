class Solution {
    public int lengthOfLastWord(String s) {
        
        s = s.trim();
        int lastIndex = s.length()-1;
        int count = 0;
        while(lastIndex>=0 && s.charAt(lastIndex)!=' ') {
            count++;
            lastIndex--;
        }
        return count;
    }
}